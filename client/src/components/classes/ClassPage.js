import React, { Component } from 'react';
import * as actions from '../../actions';

class ClassPage extends Component {
    componentDidMount() {
        console.log(this.props.params.splat)
        this.props.fetchSingleClass(this.props.params.splat);
    }

    render() {
        return(
            <div>
                This is a class page for {this.props.currentClass}
            </div>
        )
    }
}

const mapStateToProps = ({ auth, currentClass }) => {
    return {
        auth,
        currentClass
    }
}

export default connect(mapStateToProps, actions)(ClassPage);