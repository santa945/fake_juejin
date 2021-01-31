import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Input, Button } from 'antd'

import { SearchOutlined, SettingOutlined } from '@ant-design/icons';

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
    }
    render () {
        return (
            <div>
                <header className="flex">
                    <Input className="flex-1" placeholder="default size" prefix={<SearchOutlined />} />
                    <Button style={{ color: '#000' }} type="link" icon={<SettingOutlined />}>
                        标签
                    </Button>
                </header>
                <nav>导航烂</nav>
                <mian>
                    主内容
                </mian>
            </div>
        )
    }
}
Home = connect(state => state)(Home)
export default Home