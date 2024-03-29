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
const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

store.dispatch({
    type: "INIT",
    posts: [
        {
            id: 1,
            title: "Космос",
            text: "Бла-бла-бла про космос, про его бесконечные просторы и т.д. и т.п.",
            image: "image5.jpg",
            date: new Date()
        }
    ],
    lastIdPost: 1,
});

module.exports = store;