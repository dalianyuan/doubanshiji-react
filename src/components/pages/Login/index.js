import './index.scss'

import React, {Component} from 'react'

import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../store/user/actionCreator'

class Login extends Component {

	componentWillReceiveProps (props) {
		if(props.user.username) {
			props.history.replace('/mine')
		}
	}
    render () {
        return (
            <div>
            	<Link to="/">返回首页</Link>
				
				<button onClick = { this.props.login }>login</button>
            </div>
        )
    }

}

export default connect(state => state, dispatch => {
	return bindActionCreators(actionCreator,dispatch)
})(Login)