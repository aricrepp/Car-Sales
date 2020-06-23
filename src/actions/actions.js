export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = newFeature => {
    console.log("adding feature action creator");
    return {type: ADD_FEATURE, payload: newFeature};
}

export const removeFeature = removeFeature => {
    console.log('remoing feature action creator');
    return {type: REMOVE_FEATURE, payload: removeFeature}
    
}