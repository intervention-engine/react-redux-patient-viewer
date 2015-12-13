import Immutable from 'immutable';


// Because we're going to potentially be doing a lot of mutations
// (bundle load of multiple existing records) we're going to batch them
// https://facebook.github.io/immutable-js/ Batching Mutations

export const FHIRResourceReducer = (state = Immutable.Map({}) , action) => {
  switch (action.type) {
    case "BUNDLE_SUCCESS":
      // We're going to grab an array of Resources
      let resourceData = action.bundle.entry.map((el) => {return el.resource;});
      // Now we are going to clone and mutate the state
      return state.withMutations( (store) => {
        resourceData.map((resource) => {
          store.update(`${resource.resourceType}_list`, Immutable.Set(), l => l.add(resource.id) );
          store.updateIn([resource.resourceType, resource.id], val => Immutable.Map(resource));
        })
      });
    default:
      return state;
  }
};
