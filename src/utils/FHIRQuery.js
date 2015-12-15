import fetch from 'isomorphic-fetch'

const rootURL = "http://localhost:3001";

export const FHIRQuery = function (store, resource, queryParams={}){
  const queryString = Object.keys(queryParams).map(k => `${k}=${queryParams[k]}`).join("&");
  return fetch(`${rootURL}/${resource}?${queryString}`)
    .then(response => response.json())
    .then(json => store.dispatch({type: "BUNDLE_SUCCESS", bundle: json}))
}
