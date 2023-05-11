import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {getDependent, getIndependent} from '../../store/actions/cards';
import { useDispatch } from 'react-redux';

export default function FilterCountries() {
  const dispatch = useDispatch();
  return (
    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label" className='filter-title'>Dependent/Independent</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel onClick={() => dispatch(getDependent())} control={<Radio />} value='dependent' label="Dependent" />
      <FormControlLabel onClick={() => dispatch(getIndependent())} control={<Radio />} value='independent' label="Independent" />
    </RadioGroup>
  </FormControl>
  );
}
