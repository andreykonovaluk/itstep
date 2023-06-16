/*
POST_ADD
POST_DELETE
POST_EDIT
*/

/*const addPost = (post) => {
    return {
        type: "POST_ADD",
        post
    }
};

const deletePost = (postId) => {
    return {
        type: "POST_DELETE",
        postId
    }
};

const editPost = (id, post) => {
    return {
        type: "POST_EDIT",
        id,
        post
    }
};

const likePost = (id) => {
    return {
        type: "POST_LIKE",
        id
    }
}

module.exports = { addPost, deletePost, editPost, likePost };*/


export const ADD_POST = "POST_ADD";
export const DELETE_POST = "POST_DELETE";
export const EDIT_POST = "POST_EDIT";
export const LIKE_POST = "POST_LIKE";