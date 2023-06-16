const React = require("react");
const connect = require("react-redux").connect;
const { DELETE_POST, LIKE_POST } = require("../actions/actions.jsx");

const FirstPost = (props) => {
    
    const firstPost = props.posts[0];

    function handleButtonDelete(event) {
        props.onPostDelete(+event.currentTarget.dataset.id);
    }

    return <>
        <div className="blog_posts">
            {
                
                <div className="card mb-3" key={firstPost.id}>
                    <img src={`/public/assets/img/${firstPost.image}`} className="card-img-top" alt={firstPost.title} />
                        <div className="card-body">
                        <h5 className="card-title">#1 {firstPost.title}</h5>
                        <p className="card-text">{firstPost.text} </p>
                        <p className="card-text"><small className="text-body-secondary">{firstPost.date.toLocaleDateString()}</small></p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <button type="button" className="btn btn-primary">Редактировать</button>&nbsp;
                        <button type="button" className="btn btn-danger" data-id={firstPost.id} onClick={handleButtonDelete} >Удалить</button>
                        </div>
                    </div>
            }
        </div>
    </>

}

const mapStateToProps = state => {
    return {
        posts: state.post.posts //post -  название reducer, описанного в /reducer/index.jsx, posts - массив продуктов
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(FirstPost);