const React = require("react");
const Form = require("./Form.jsx");
const ListPosts = require("./ListPosts.jsx");
const {Route, Switch} = require("react-router");
const UserInfo = require("./UserInfo.jsx");
const FirstPost = require("./FirstPost.jsx");
const Detail = require("./Detail.jsx");


const AppView = () => {

    return <div>
        <Switch>
            <Route exact path="/" component={UserInfo} />
            <Route path="/post/add" component={Form} />
            <Route path="/post/:id" component={Detail} />
            <Route path="/post/firstPost" component={FirstPost} />
            <Route path="/post/" component={ListPosts} />
        </Switch>
    </div>;
}

module.exports = AppView;