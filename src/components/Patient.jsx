import React from 'react';

export const Patient = ({patient}) => (
  <li className='patient'> {getPatientName(patient)}</li>
);

const getPatientName = (patient) =>{
  let {id, name } = patient;
  let patientName = `Patient ${id}`;
  if (name) {
    let {family, given} = name[0];
    patientName = `${family}, ${given}`
  }
  return patientName;
}
