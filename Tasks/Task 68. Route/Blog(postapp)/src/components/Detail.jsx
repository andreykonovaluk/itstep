const React = require("react");
const connect = require("react-redux").connect;
const { DELETE_POST, LIKE_POST } = require("../actions/actions.jsx");

const Detail = (props) => {
    
    const routeParams = props.match.params;
    const post = props.posts.find((post) => post.id == routeParams.id);

    function handleButtonDelete(event) {
        props.onPostDelete(+event.currentTarget.dataset.id);
    }

    return<>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.text}</div>
        <div><img src={`/public/assets/img/${post.image}`} className="card-img-top" alt={post.title} /></div>
        <div>{post.date.toLocaleDateString()}</div>
    </>
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts,  //post -  название reducer, описанного в /reducer/index.jsx, posts - массив продуктов
        comments: state.post.comments
    }
};

const mapDispatchToProps = dispatch => ({
    onPostDelete: (postId) => {
        dispatch({
            type: DELETE_POST, postId
        })
    },
    onLikePost: (id) => {
        dispatch({
            type: LIKE_POST, id
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Detail);

