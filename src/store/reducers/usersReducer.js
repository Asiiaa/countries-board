import {
  ACTION_SET_COUNTRY,
  ACTION_SET_DEPENDENT,
  ACTION_SET_INDEPENDENT,
  ACTION_SET_SORT_POPULATION_DESC,
  ACTION_SET_SEARCH_VALUE,
  ACTION_SET_SORT_AREA_DESC,
  ACTION_SET_SORT_AREA_COUNT,
  ACTION_SET_SORT_POPULATION_COUNT,
  ACTION_SET_VALUE_REGION,
  ACTION_SET_VALUE_SUB_REGION,
  SET_IS_LOADING,
} from '../actions/users';

const INITIAL_STATE = {
  isLoading: false,
  countries: [],
  setPage: 1,
  countriesOnPage: 10,
  collections: []
};

export default function countiesReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload
      };
      case ACTION_SET_COUNTRY:
        return {
          ...state,
          countries: payload
        };
    case ACTION_SET_DEPENDENT:
      return {
        ...state,
        countries: payload.filter((a) => a.independent).map((country) => country)
      };

    case ACTION_SET_INDEPENDENT:
      return {
        ...state,
        countries: payload.filter((a) => !a.independent).map((country) => country)
      };

    case ACTION_SET_SORT_AREA_COUNT:
      return {
        ...state,
        countries: payload.sort((a,b) => b.area - a.area).map((country) => country)
      };

    case ACTION_SET_SORT_AREA_DESC:
      return {
        ...state,
        countries: payload.sort((a,b) => a.area - b.area).map((country) => country)
      };

    case ACTION_SET_SORT_POPULATION_COUNT:
      return {
        ...state,
        countries: payload.sort((a,b) => b.population - a.population).map((country) => country)
      };

    case ACTION_SET_SORT_POPULATION_DESC:
      return {
        ...state,
        countries: payload.sort((a,b) => a.population - b.population).map((country) => country)
      };

      case ACTION_SET_SEARCH_VALUE:
        return {
          ...state,
          countries: payload.data.filter((country) => country.name.common.toLowerCase().includes(payload.searchValue.toLowerCase())).sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => country)
        };

        case ACTION_SET_VALUE_REGION:
          console.log(payload)
          return {
            ...state,
            countries: payload.data.filter((country) => country.region === payload.region).map((country) => country)
          };

          case ACTION_SET_VALUE_SUB_REGION:
            console.log(payload)
            return {
              ...state,
              countries: payload.data.filter((country) => country.subregion === payload.subregion).map((country) => country)
            };

      // case ACTION_PAGE:
      //   return {
      //     ...state,
      //     setPage: state.setPage + 1,
      //     countries: payload,
      //     collections: payload.slice(firstCountryIndex, lastCountryIndex)
      //   };
    default:
      return state;
  }
}
