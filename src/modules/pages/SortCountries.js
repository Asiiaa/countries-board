import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import {setSortAreaCount, setSortAreaDesc, setSortPopulationCount, setSortPopulationDesc, setCountries} from '../../store/actions/cards';
import { useDispatch } from 'react-redux';

export default function SortCountries({countries}) {
  const [option, setOption] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className='sort'>
      <h1>Population/Area</h1>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" sx={{ color: 'white'}}>Option</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={option}
          onChange={handleChange}
          label="Option"
          >
          <MenuItem value="">
            <em onClick={() => dispatch(setCountries(countries))}>None</em>
          </MenuItem>
          <ListSubheader>Population</ListSubheader>
          <MenuItem onClick={() => dispatch(setSortPopulationCount(countries))} value={1.1}>increases</MenuItem>
          <MenuItem onClick={() => dispatch(setSortPopulationDesc(countries))} value={1.2}>descending</MenuItem>
          <ListSubheader>Area</ListSubheader>
          <MenuItem onClick={() => dispatch(setSortAreaCount(countries))} value={2.1}>increases</MenuItem>
          <MenuItem onClick={() => dispatch(setSortAreaDesc(countries))} value={2.2}>descending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}