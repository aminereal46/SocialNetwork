import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './adapters/primary/ui/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createReduxStore} from "./store/store";
import ApiPostsGateway from "./adapters/secondary/gateways/ApiPostsGateway";
import ApiCommentsGateway from "./adapters/secondary/gateways/ApiCommentsGateway";

const postsGateway = new ApiPostsGateway();
const commentsGateway = new ApiCommentsGateway();

const store = createReduxStore({postsGateway, commentsGateway});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
