const React = require("react");
const connect = require("react-redux").connect; //метод connect - возвращает обЪект с теми данными, которые необходимы для store
const actions = require("../actions/action.jsx");

const AppView = (props) => {
    return <h1>Hello World!!!</h1>
}

const mapStateToProps = (state) => {

    return {
        posts: state.posts
    }

}

module.exports = connect(mapStateToProps, actions)(AppView);