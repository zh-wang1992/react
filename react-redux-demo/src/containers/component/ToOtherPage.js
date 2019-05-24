import React, { PureComponent } from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class ToOtherPage extends PureComponent {
    handleClick = () => {
        this.props.history.push("/list");
    }
    render() {
        return <button onClick={this.handleClick}>{this.props.name}</button>
    }
}
//类型校验。url 是两个必传的字符串属性
ToOtherPage.propTypes = {
    url: PropTypes.string.isRequired,
    // name:PropTypes.string.isRequired
}

ToOtherPage.defaultProps = {
    name: "ToPages"
}

export default withRouter(connect()(ToOtherPage))

