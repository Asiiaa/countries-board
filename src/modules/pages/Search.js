import { Input } from '@mui/material';
import { getSearchValue } from '../../store/actions/cards';
import { useDispatch } from 'react-redux';

function Search() {
    const searchValue = (searchValue) => {
        dispatch(getSearchValue(searchValue))
      }
      const dispatch = useDispatch();
  return (
    <div className='input'>
        <Input onChange={(e) => searchValue(e.target.value)}  className="search-input" placeholder='...'></Input>
    </div>
  )
}

export default Search