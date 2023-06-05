const reducer = (state = {}, action) => {

    switch(action.type){

        case "INIT":
            return {
                ...state,
                posts: action.posts,
                lastIdProduct: action.lastIdProduct
            }

        case "POST_ADD":
            let newId = ++state.lastIdPost;
            let newPost = {
                id: newId,
                title: action.post.title,
                text: action.post.text,
                image: action.post.image
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                lastIdPost: newId
            };

        case "POST_DELETE":
            return {...state,
                posts: state.posts.filter((item) => item.id != action.postId)
            };

        case "POST_EDIT":
            break;

    }

    return state;
}

module.exports = reducer;