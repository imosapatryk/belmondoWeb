import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import LoginOrRegister from 'containers/LoginOrRegister';

class LayoutComponents extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    const layout = this.props.layout;
    return (
      <LoginOrRegister open={layout.loginOpen} />
    );
  }
}

LayoutComponents.propTypes = {
  layout: PropTypes.object
}

function makeStateToProps(state){
  return {
    layout: state.layout
  };
}

export default connect(makeStateToProps)(LayoutComponents);
