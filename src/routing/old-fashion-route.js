import React from 'react'

const Home = () => <div>Home</div>
const About = () => <div>About</div>

class OldFashionRoute extends React.Component {
    render() {
        return (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        )
    }
}

export default OldFashionRoute