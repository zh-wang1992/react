import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add} from '../../actions/primitive'

const mapStateToProps = (state) => ({
    value:  state.get('primitiveJS').value
})

const mapDispatchToProps = (dispatch) => ({
    add: (data) => dispatch(add(data)),
})
class PrimitiveJS extends Component {

    render() { 
        console.log('render----primitive-----')
        return <div style={{marginTop:'20px'}}>
            {`value:${this.props.value}`}
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimitiveJS)