import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { getValueRegion } from '../../store/actions/cards';
import { useDispatch } from 'react-redux';

export default function FilterRegion() {
    const valueRegion = (region) => {
        dispatch(getValueRegion(region))
      }
    const dispatch = useDispatch();
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className='filter-title'>Region</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={() => valueRegion("Europe")} value="europe" control={<Radio />} label="Europe" />
        <FormControlLabel onClick={() => valueRegion("Asia")} value="asia" control={<Radio />} label="Asia" />
        <FormControlLabel onClick={() => valueRegion("Africa")} value="africa" control={<Radio />} label="Africa" />
        <FormControlLabel onClick={() => valueRegion("Americas")} value="americas" control={<Radio />} label="Americas" />
        <FormControlLabel onClick={() => valueRegion("Oceania")} value="oceania" control={<Radio />} label="Oceania" />
        <FormControlLabel onClick={() => valueRegion("Antarctic")} value="antarctic" control={<Radio />} label="Antarctic" />
      </RadioGroup>
    </FormControl>
  );
}