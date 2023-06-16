/*
state = {
    posts: [
        {
            id,
            title,
            text,
            image
        }
    ],

    lastIdPost //- id последнего добавленного поста
}
*/
const reducer = require("./reducer/index.jsx");
const redux = require("redux");

const createBrowserHistory = require('history').createBrowserHistory;
const routerMiddleware = require("react-router-redux").routerMiddleware;


const history = createBrowserHistory();
const store = redux.createStore(reducer(history), {},
    redux.compose(
        redux.applyMiddleware(
            routerMiddleware(history)
        )
    )
);

store.dispatch({
    type: "INIT",
    user: {
        name: "Андрей Коновалюк",
        age: 32
    },
    posts: [
        {
            id: 1,
            title: "Космос",
            text: "Бла-бла-бла про космос, про его бесконечные просторы и т.д. и т.п.",
            image: "image5.jpg",
            date: new Date()
        }
    ],
    comments:[{
        id: 1,
        postId: 1,
        author: "Андрей",
        text: "Это просто шикарнейший пост!"
        
    },
    {
        id: 2,
        postId: 1,
        author: "Егор",
        text: "Пост фигня полная!"
    }],
    lastIdPost: 1,
    lastIdComment: 2,
});

module.exports = { store, history };