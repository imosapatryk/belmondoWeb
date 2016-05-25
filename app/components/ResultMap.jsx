import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

export default class ResultMap extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{
         key: 'AIzaSyCh1deTNeMRMhugycX0eY0LJP6PljkPq-k'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
            <div className="place" lat={60.955413} lng={30.337844}>MyPlace</div>
      </GoogleMap>
    );
  }
}
