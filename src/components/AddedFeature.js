import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions/actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removeFeature(props.feature)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateIntoProps = state => {
  return {
    ...state.car.features
  };
}

const mapDispatchToProps = {removeFeature};

export default connect(mapStateIntoProps, mapDispatchToProps)(AddedFeature);
