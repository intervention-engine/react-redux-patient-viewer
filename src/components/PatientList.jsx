import React from 'react';
import {Patient} from './Patient'

export const PatientList = ({patients}) => (
    <ul className='patient-list'>
      {patients.map((patient, index) =>
        <Patient patient={patient}
                  key={index} />
      )}
    </ul>
)
