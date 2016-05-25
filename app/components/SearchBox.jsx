import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FilterResultsInput from 'components/FilterResultsInput';
import ActionHome from 'material-ui/svg-icons/action/home';

const style = {
  searchboxContainer:{
    width: '95%',
    padding: '20px 0px 0px 0px',
    margin: '10px auto'
  },
  searchBox:{
    width: '100%',
    fontSize: '20px'
  }
};

export default class SearchBox extends React.Component{
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event){
    console.log("Called in searchBox");
    this.props.onEntryChange(event);
  }

  render(){
    return(
      <div style={style.searchboxContainer}>
        <TextField
          type="search"
          style={style.searchBox}
          onChange={this.onValueChange}
          floatingLabelText="Search for result"
          hintText="Search for result" />
      </div>
    );
  }
}

SearchBox.propTypes = {
  onEntryChange: PropTypes.func.isRequired
};
