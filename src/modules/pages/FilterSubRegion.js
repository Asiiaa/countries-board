import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { getValueSubRegion} from '../../store/actions/cards';
import { useDispatch } from 'react-redux';  

export default function FilterSubRegion() {
    const valueSubRegion = (subregion) => {
        dispatch(getValueSubRegion(subregion))
      }
    const dispatch = useDispatch();
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className='filter-title'>Subregion</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={() => valueSubRegion("Northern Europe")} value="Northern Europe" control={<Radio />} label="Northern Europe" />
        <FormControlLabel onClick={() => valueSubRegion("Southern Asia")} value="Southern Asia" control={<Radio />} label="Southern Asia" />
        <FormControlLabel onClick={() => valueSubRegion("Central Europe")} value="Central Europe" control={<Radio />} label="Central Europe" />
        <FormControlLabel onClick={() => valueSubRegion("Western Asia")} value="Western Asia" control={<Radio />} label="Western Asia" />
        <FormControlLabel onClick={() => valueSubRegion("Southern Africa")} value="Southern Africa" control={<Radio />} label="Southern Africa" />
        <FormControlLabel onClick={() => valueSubRegion("Eastern Asia")} value="Eastern Asia" control={<Radio />} label="Eastern Asia" />
        <FormControlLabel onClick={() => valueSubRegion("Western Europe")} value="Western Europe" control={<Radio />} label="Western Europe" />
        <FormControlLabel onClick={() => valueSubRegion("South America")} value="South America" control={<Radio />} label="South America" />
        <FormControlLabel onClick={() => valueSubRegion("Australia and New Zealand")} value="Australia and New Zealand" control={<Radio />} label="Australia and New Zealand" />
        <FormControlLabel onClick={() => valueSubRegion("Central America")} value="Central America" control={<Radio />} label="Central America" />
        <FormControlLabel onClick={() => valueSubRegion("Western Africa")} value="Western Africa" control={<Radio />} label="Western Africa" />
        <FormControlLabel onClick={() => valueSubRegion("Southeast Europe")} value="Southeast Europe" control={<Radio />} label="Southeast Europe" />
        <FormControlLabel onClick={() => valueSubRegion("Southern Europe")} value="Southern Europe" control={<Radio />} label="Southern Europe" />
        <FormControlLabel onClick={() => valueSubRegion("Eastern Africa")} value="Eastern Africa" control={<Radio />} label="Eastern Africa" />
        <FormControlLabel onClick={() => valueSubRegion("North America")} value="North America" control={<Radio />} label="North America" />
        <FormControlLabel onClick={() => valueSubRegion("Caribbean")} value="Caribbean" control={<Radio />} label="Caribbean" />
        <FormControlLabel onClick={() => valueSubRegion("Eastern Europe")} value="Eastern Europe" control={<Radio />} label="Eastern Europe" />
        <FormControlLabel onClick={() => valueSubRegion("Micronesia")} value="Micronesia" control={<Radio />} label="Micronesia" />
        <FormControlLabel onClick={() => valueSubRegion("Melanesia")} value="Melanesia" control={<Radio />} label="Melanesia" />
        <FormControlLabel onClick={() => valueSubRegion("Northern Africa")} value="Northern Africa" control={<Radio />} label="Northern Africa" />
        <FormControlLabel onClick={() => valueSubRegion("South-Eastern Asia")} value="South-Eastern Asia" control={<Radio />} label="South-Eastern Asia" />
        <FormControlLabel onClick={() => valueSubRegion("Polynesia")} value="Polynesia" control={<Radio />} label="Polynesia" />
        <FormControlLabel onClick={() => valueSubRegion("Middle Africa")} value="Middle Africa" control={<Radio />} label="Middle Africa" />
        <FormControlLabel onClick={() => valueSubRegion("Central Asia")} value="Central Asia" control={<Radio />} label="Central Asia" />
      </RadioGroup>
    </FormControl>
  );
}