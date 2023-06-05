const React = require("react");

const ListPosts = (props) => {

    return <>
        <div class="blog_posts">
            {
                posts.map((post) =>
                    <div class="card mb-3">
                        <img src={`./img/${post.image}`} class="card-img-top" alt={post.title} />
                        <div class="card-body">
                            <h5 class="card-title">#{post.id} {post.title}</h5>
                            <p class="card-text">{post.text} </p>
                            <p class="card-text"><small class="text-body-secondary">{post.date.toLocaleDateString()}</small></p>
                        </div>
                        <div class="card-footer text-body-secondary">
                            <button type="button" class="btn btn-primary">Редактировать</button>&nbsp;
                            <button type="button" class="btn btn-danger" >Удалить</button>
                        </div>
                    </div>
                )
            }
        </div>
    </>

}

module.exports = ListPosts;