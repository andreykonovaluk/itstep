const React = require("react");
const connect = require("react-redux").connect;
const {DELETE_POST, LIKE_POST} = require("../actions/actions.jsx");

const ListPosts = (props) => {
    //props.posts, props.onPostDelete

    function handleButtonDelete(event){
        props.onPostDelete(+event.currentTarget.dataset.id);
    }

    function getCountComments(id){  //id - id поста
        return props.comments.filter((comment) => comment.postId == id).length;
    } 

    return <>
        <div className="blog_posts">
            {
                props.posts.map((post, index) =>{
                    return <div className="card mb-3" key={post.id}>
                        <img src={`/public/assets/img/${post.image}`} className="card-img-top" alt={post.title} />
                        <div className="card-body">
                            <h5 className="card-title">#{index+1} {post.title}</h5>
                            <p className="card-text">{post.text} </p>
                            <p className="card-text"><small className="text-body-secondary">{post.date.toLocaleDateString()}</small></p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <button type="button" className="btn btn-primary">Редактировать</button>&nbsp;
                            <button type="button" className="btn btn-danger" data-id={post.id} onClick={handleButtonDelete} >Удалить</button>
                            <span>{getCountComments(post.id)}</span>
                        </div>
                    </div>
                })
            }
        </div>
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(ListPosts);