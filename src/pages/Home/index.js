import React, { Component } from 'react'
import homeApi from "./../../apis/home"

console.log('homeApi', homeApi);
class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: 'xx'
        }
    }
    componentDidMount () {
        console.log(222);
        homeApi.getHot().then(res => {
            console.log(res);
        })
    }
    render () {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default Home