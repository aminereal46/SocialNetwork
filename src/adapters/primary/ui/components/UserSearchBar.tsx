import React from 'react';
import {makeStyles, MenuItem, Select} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectAllUsers, selectSelectedUser,} from "../../../../coreLogic/usecases/list-posts/listPostsSelectors";
import {listPostsActionsCreators} from "../../../../coreLogic/usecases/list-posts/actionCreators";

const useStyles = makeStyles(theme => ({
    searchBar: {
        marginBottom: theme.spacing(2),
    },
    select: {
        minWidth: theme.spacing(20)
    }

}));



function SearchBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const user = useSelector(selectSelectedUser);

    const handleChange = (event: any) => {
        dispatch(listPostsActionsCreators.setSelectedUser(event.target.value));
    }
    return (
        <div className={classes.searchBar}>
            <Select
                classes={{select: classes.select}}
                labelId="select user"
                id="users-select"
                value={user}
                onChange={handleChange}
            >
                <MenuItem value={'all'}>{`All users`}</MenuItem>
                {users.map(user => <MenuItem key={user.id} value={user.id}>{`${user.username} (${user.name})`}</MenuItem>)}
            </Select>
        </div>
    )


}

export default SearchBar;