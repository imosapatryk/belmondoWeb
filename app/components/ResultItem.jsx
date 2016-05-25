import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ResultIconText from './ResultIconText';
import ResultMap from './ResultMap';
import {grey50, grey100, grey200, grey500, grey600} from 'material-ui/styles/colors';

import walkingIcon from 'images/walking.svg';
import runningIcon from 'images/running.svg';
import cyclingIcon from 'images/cycling.svg';

import avgSpeedIcon from 'images/avg_speed_icon.png';
import maxSpeedIcon from 'images/max_speed_icon.png';
import distanceIcon from 'images/distance_icon.png';
import calorieIcon from 'images/calorie_icon.png';

//import SimpleMapPage from './SimpleMapPage';

const style = {
  main:{
    width: '100%',
    padding: '20px'
  },
  mainCard: {
    width: '100%',
    padding: '20px',
    backgroundColor: grey50

  },
  subtitle:{
    float: 'right'
  },
  header:{
    display: 'inline-block',
    width: '100%'
  },
  avatar:{
    container:{
      padding: '16px',
      paddingBottom: '0px',
      display: 'inline-block'
    },
    img:{
      width: '50px',
      height: '50px'
    }
  },
  title:{
    color: grey500,
    display: 'inline-block',
    position: 'relative',
    top: '16px',
    right: '30px',
    float: 'right'
  },
  duration:{
    fontWeight: 'bold',
    paddingTop: '0px',
    paddingBottom: '5px',
    color: grey500,
    textAlign: 'center'
  },
  durationHHMMSS:{
    fontSize: '32px'
  },
  durationMilis:{
    fontSize: '28px'
  },
  divider:{
    display: 'inline-block',
    width: '90%',
    backgroundColor: grey100
  },
  resultSmallDetails:{
    textAlign: 'center',
    paddingBottom: '0px'
  },
  expandedMapView:{
    width: '100%',
    margin: '20px auto 0px auto',
  },
  mapContainer:{
    width: '100%',
    height: '400px',
    padding: '0px 5px 5px 5px'
  }
}

export default class ResultItem extends React.Component{

    onDestroyClick(){
      const { result, index, onDestroy } = props;
      onDestroy(result.id, index);
    }

    constructor(props){
      super(props);
      this.onDestroyClick = this.onDestroyClick.bind(this);

      this.state = {
        expanded: false
      }

    }

    handleExpandChange = (expanded) => {
      this.setState({expanded: expanded});
    }

    getActivityIcon(){
      const discipline = this.props.result.discipline;
      if(discipline === "walking")
        return walkingIcon;
      if(discipline === "running")
        return runningIcon;
      if(discipline === "cycling")
        return cyclingIcon;
      return null;
    }

    render(){
      const result = this.props.result;
      var durationSplit = result.duration.split(":");
      var durationLeft = durationSplit[0] + ":" + durationSplit[1] + ":" + durationSplit[2];
      var durationRight = ":" + durationSplit[3];

      return (
        <div style={style.main}>
          <Card style={style.mainCard} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
           <Card actAsExpander={true}>
            <div actAsExpander={true} style={style.header}>
            <div style={style.avatar.container}><img src={this.getActivityIcon()} style={style.avatar.img}/></div>
            <div style={style.title}>{result.datetime}</div>
            </div>
           <CardText actAsExpander={true} style={style.duration} >
              <span style={style.durationHHMMSS}>{durationLeft}</span>
              <span style={style.durationMilis}>{durationRight}</span>
           </CardText>
           <div style={{textAlign: 'center'}}>
             <Divider style={style.divider}/>
           </div>
           <CardText actAsExpander={true} style={style.resultSmallDetails}>
              <ResultIconText icon={avgSpeedIcon} result={result.avg_speed} />
              <ResultIconText icon={maxSpeedIcon} result={result.max_speed} />
              <ResultIconText icon={distanceIcon} result={result.distance} />
              <ResultIconText icon={calorieIcon} result={result.calories} />
              <div style={{textAlign: 'center'}}>
              <Divider style={style.divider}/>
              </div>
           </CardText>
           </Card>
           <Card expandable={true} expanded={this.state.expanded} style={style.expandedMapView} >
              <CardTitle title="MapView" titleStyle={{fontSize: '18px', color: grey500}}>
              </CardTitle>
              <div style={style.mapContainer}>
                <ResultMap />
              </div>
           </Card>
          </Card>
        </div>
      )
    }

    /*
    render(){
      var r = this.props.result;
      var head = <div><span>{r.discipline}</span><span className={cx('right', 'datetime')}>{r.datetime}</span></div>;
      return(
          <Panel header={head} key={r.id} bsStyle="success">
            <div class="col-md-1"><img src={walkingImage} /></div>
          </Panel>
      );
    }
    */


}

ResultItem.propTypes = {
  /*
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  datetime: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  discipline: PropTypes.string.isRequired,
  max_speed: PropTypes.number.isRequired,
  avg_speed: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,*/
  result: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  onDestroy: PropTypes.func.isRequired
}
