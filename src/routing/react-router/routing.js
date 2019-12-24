import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './style.css'
import ShowLocationInfoWithRouter from "./nav-info";

const Home = () => <div>Home</div>
const About = () =>
    <div>
        About
        <ShowLocationInfoWithRouter />
    </div>

const Post = () => <div>Post</div>

const BlogPosts = props =>
    <div>
        BlogPosts
        <Route path={`${props.match.url}/blog-posts`} component={Post}/>
    </div>

const NotFound = () => <div>404</div>

class Routing extends React.Component {
    render() {
        return(
            <Router>
                <ul>
                    <li><NavLink isActive={() => {}} to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="is-active" to="/about">About</NavLink></li>
                    <li><NavLink activeStyle={{ color: 'green' }} to="/blog-posts">BlogPosts</NavLink></li>
                </ul>

                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/blog-posts" component={BlogPosts}/>
                    <Redirect from="about" to="/blog-posts"/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default Routing;