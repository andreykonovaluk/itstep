const React = require("react");
const connect = require("react-redux").connect; //метод connect - возвращает обЪект с теми данными, которые необходимы для store
const actions = require("../actions/action.jsx");
const Form = require("../components/Form.jsx");

const AppView = (props) => {

    return <>
        <Form onPostAdd={props.addPost} />
    </>
}

const mapStateToProps = (state) => {

    return {
        posts: state.posts
    }

}

module.exports = connect(mapStateToProps, actions)(AppView);