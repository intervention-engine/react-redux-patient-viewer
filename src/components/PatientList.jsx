import React from 'react';
import {Patient} from './Patient'

export const PatientList = ({patients}) => (
    <ul class="patient-list">
      {patients.map((patient, index) =>
        <Patient patient={patient}
                  key={index} />
      )}
    </ul>
)
