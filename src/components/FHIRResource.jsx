import React from 'react';

export const FHIRResource = ({resource}) => (
    <div className='resource'>
      <h3>Type: {resource.resourceType}</h3>
      {Object.keys(resource).map((key) => {
        console.log(typeof resource[key])
        if(typeof resource[key] === "object"){
          <FHIRResource resource={resource[key]} />
        }
        else {
          `${key}:${resource[key]}`
        }
      })}
    </div>
);
