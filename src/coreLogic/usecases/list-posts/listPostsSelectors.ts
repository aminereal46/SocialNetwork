import {AppState, CoreLogicState, UsersStore} from "../../../store/appState.interface";

export interface PostView {
    id: number,
    title: string,
    body: string,
    userId: number,
    comments: number[],
}
export interface UserView {
    id: number,
    name: string,
    username: string,
}

const selectCoreLogicState = (state: AppState): CoreLogicState => state.coreLogicState;

const selectUsers = (state: AppState): UsersStore => {
    const coreLogicState = selectCoreLogicState(state);
    return coreLogicState.users;
};

export const selectSelectedUser = (state: AppState): string | number => {
    const {selectedUser} = selectUsers(state);
    return selectedUser
}

export const selectPosts = (state: AppState): PostView[] => {
    const coreLogicState = selectCoreLogicState(state);
    const selectedUser = selectSelectedUser(state);
    return Object.values(coreLogicState.posts).filter(post => selectedUser === 'all' || selectedUser === post.userId);
}

export const selectUserName = (userId: number) => (state: AppState): string => {
    const {allUsers} = selectUsers(state);
    return allUsers[userId] ? allUsers[userId].name : ''
}

export const selectAllUsers = (state: AppState): UserView[] => {
    const {allUsers} = selectUsers(state);
    return Object.values(allUsers).map(user => ({id: user.id, name: user.name, username: user.username}))
}

