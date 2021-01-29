import React, { Component } from 'react'
import findApi from './../../apis/find'
class Find extends Component {
    constructor() {
        super()
    }

    addGood () {
        findApi.addGood({
            id: 1,
            title: 'xxx',
            price: 399,
            descript: 'ddd',
        })
    }
    render () {
        return (
            <div>
                <button onClick={this.addGood.bind(this)}>添加一个商品</button>
            </div>
        )
    }
}

export default Find