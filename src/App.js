import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from './actions/actions'

const App = (props) => {
  
  const {state} = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures car={props.car}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateIntoProps = (state) => {
  return {...state};
};

const mapDispatchToProps = {addFeature, removeFeature};

export default connect(mapStateIntoProps, mapDispatchToProps)(App);
