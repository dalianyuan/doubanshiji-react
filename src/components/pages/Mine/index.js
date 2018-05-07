import './index.scss'

import React, {Component} from 'react'
import { connect } from 'react-redux'


class Mine extends Component {
	
	componentWillMount () {
		if (!this.props.user.username) {
			this.props.history.replace('/login')
		}
	}
	
    render () {
        return (
            <div>
                Mine -- { this.props.user.username }
            </div>
        )
    }
}

export default connect(state=>state)(Mine)