import React, { Component } from 'react'
// import homeApi from "./../../apis/home"

import { connect } from 'react-redux'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: 'xx'
        }
    }
    componentDidMount () {
        const { dispatch } = this.props
        dispatch({
            type: 'SAGA_GOODS_LIST',
            payload: {
                id: 112233
            }
        })
        // homeApi.getList().then(res => {
        //     console.log(res);
        // })
    }
    render () {
        return (
            <div>
                Home
            </div>
        )
    }
}
Home = connect(state => state)(Home)
export default Home