import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import SearchBox from 'components/SearchBox';
import MainSection from 'components/MainSection';
import ResultItem from 'components/ResultItem';
import Scoreboard from 'components/Scoreboard';
import styles from 'css/components/results';
import { grey400 } from 'material-ui/styles/colors';
import { changeSearchQuery } from 'actions/results';
import {
  fetchResults
} from 'actions/results';


const cx = classNames.bind(styles);

const style ={
  mainSection:{
    width: '800px'
  },
  noResults:{
    margin: '50px auto',
    fontSize: '22px',
    fontFamily: 'sans-serif',
    color: grey400
  }
}

class Results extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchResults
  ]

  constructor(props) {
    super(props);
    this.onDestroy = this.onDestroy.bind(this);
    this.onEntryChange = this.onEntryChange.bind(this);
  }

  onDestroy(id, index) {
    const { dispatch } = this.props;
    dispatch(destroyResult(id, index));
  }

  onEntryChange(event) {
    this.props.dispatch(changeSearchQuery(event.target.value));
  }

  resultItems(){
    let searchValue = this.props.result.searchQuery;
    searchValue = searchValue ? searchValue : '';

    let filteredResults = this.props.result.results.filter((result) => {
      return result.discipline.toLowerCase().indexOf(searchValue) >= 0
      || result.datetime.toLowerCase().indexOf(searchValue) >= 0;
    });

    if(filteredResults.length === 0){
      return (
        <div style={style.noResults}>No results found for given entry.</div>
      );
    }

    return filteredResults.map((result, key) => {
      return (
        <ResultItem
        key={key}
          index={key}
          result = {result}
          onDestroy={this.onDestroy} />);
        });
  }

  render(){
    return(
      <div className={cx('results')}>
        <SearchBox onEntryChange={this.onEntryChange} />
        {this.resultItems()}
      </div>
    )
  }
}

Results.propTypes = {
  dispatch: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    result: state.result
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Results);
