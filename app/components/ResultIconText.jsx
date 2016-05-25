import React from 'react';
import {green300} from 'material-ui/styles/colors';

const style = {
  resultDetail:{
    width: '40px',
    height: '40px',
    padding: '10px'
  },
  resultTextDetail:{
    position: 'relative',
    bottom: '10px',
    fontSize: '18px',
    color: green300
  }
}

export default class ResultIconText extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <span>
        <span><img style={style.resultDetail} src={this.props.icon} /></span>
        <span style={style.resultTextDetail}>{this.props.result}</span>
      </span>
    )
  }
}
