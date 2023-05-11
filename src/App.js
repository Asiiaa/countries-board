import './index.css';
import SortCountries from './modules/pages/SortCountries';
import { selectCountries } from './store/selectors/countries';
import CardsBoard from './modules/pages/CardsBoard';
import {useSelector} from 'react-redux';
import store from './store';
import {getBoard, setIsLoading} from './store/actions/cards';
import FilterCountries from './modules/pages/FilterCountries';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import Search from './modules/pages/Search';
import FilterRegion from './modules/pages/FilterRegion';
import FilterSubRegion from './modules/pages/FilterSubRegion';

store.dispatch(getBoard());
function App() {
  const countries = useSelector(selectCountries);
  const [page, setPage] = useState(1);
  const loading = useSelector(setIsLoading);
  
  const lastCountryIndex = page * 10
  const firstCountryIndex = lastCountryIndex - 10
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)
  
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
    {loading.payload.isLoading ? <h1>Loading...</h1> : (
    <div className='board'>
      <div className='search'>
        <Search countries={countries}/>
      </div>
      <div className='App'>
        <div className='sidebar'>
          <SortCountries countries={countries}/>
          <FilterCountries countries={countries}/>
          <FilterRegion countries={countries}/>
          <FilterSubRegion countries={countries}/>
        </div>

        <div className='cards'>
          {(currentCountry.map((country) => (
              <CardsBoard key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
            )))}
        </div>
      </div>
      <div className='footer'>
        <Pagination 
            className='pagination'
            count={Math.floor(countries.length/10)}
            color="primary" 
            onChange={handleChange}
            page={page}
            />
      </div>
    </div>
    )}
    </>
  );
}

export default App;
