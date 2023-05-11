import api from '../../api';

function createAction(type) {
  return (payload) => ({ type, payload });
}

export const SET_IS_LOADING = 'SET_IS_LOADING';
export const ACTION_SET_COUNTRY = 'ACTION_SET_COUNTRY';
export const ACTION_SET_DEPENDENT = 'ACTION_SET_DEPENDENT';
export const ACTION_SET_INDEPENDENT = 'ACTION_SET_INDEPENDENT';
export const ACTION_SET_SORT_POPULATION_COUNT = 'ACTION_SET_SORT_POPULATION_COUNT';
export const ACTION_SET_SORT_POPULATION_DESC = 'ACTION_SET_SORT_POPULATION_DESC';
export const ACTION_SET_SORT_AREA_DESC = 'ACTION_SET_SORT_AREA_DESC';
export const ACTION_SET_SORT_AREA_COUNT = 'ACTION_SET_SORT_AREA_COUNT';
export const ACTION_SET_VALUE_REGION = 'ACTION_SET_VALUE_REGION';
export const ACTION_SET_VALUE_SUB_REGION = 'ACTION_SET_VALUE_SUB_REGION';
export const ACTION_SET_SEARCH_VALUE = 'ACTION_SET_SEARCH_VALUE';
export const ACTION_PAGE = 'ACTION_PAGE';

export const setIsLoading = createAction(SET_IS_LOADING);

export const setCountries = createAction(ACTION_SET_COUNTRY);
export function getBoard() {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    api.get('all').then(({ data }) => {
      dispatch(setCountries(data));
      dispatch(setIsLoading(false));
    });
  };
}

export const setDependent = createAction(ACTION_SET_DEPENDENT);
export function getDependent() {
  return (dispatch) => {
    api.get('all')
      .then(({ data }) => dispatch(setDependent(data)));
  };
}

export const setIndependent = createAction(ACTION_SET_INDEPENDENT);
export function getIndependent() {
    return (dispatch) => {
        api.get('all')
          .then(({ data }) => dispatch(setIndependent(data)));
      };
}

export const setSortPopulationCount = createAction(ACTION_SET_SORT_POPULATION_COUNT);
export function getSortPopulationCount() {
    return (dispatch) => {
        api.post('all').then(({ data }) => {
          dispatch(setSortPopulationCount(data));
        });
    }
}

export const setSortPopulationDesc = createAction(ACTION_SET_SORT_POPULATION_DESC);
export function getSortPopulationDesc() {
  return (dispatch) => {
      api.post('all').then(({ data }) => {
        dispatch(setSortPopulationDesc(data));
      });
  }
}

export const setSortAreaCount = createAction(ACTION_SET_SORT_AREA_COUNT);
export function getSortAreaCount() {
    return (dispatch) => {
        api.get('all')
          .then(({ data }) => dispatch(setSortAreaCount(data)));
      };
}

export const setSortAreaDesc = createAction(ACTION_SET_SORT_AREA_DESC);
export function getSortAreaDesc() {
  getBoard()
    return (dispatch) => {
        api.get('all')
          .then(({ data }) => dispatch(setSortAreaDesc(data)));
      };
}

export const setPagination = createAction(ACTION_PAGE);
export function getPagination() {
    return (dispatch) => {
        api.get('all')
          .then(({ data }) => dispatch(getPagination(data)));
      };
}

export const setValueRegion = createAction(ACTION_SET_VALUE_REGION);
export function getValueRegion(region) {
    return (dispatch) => {
        api.get('all')
          .then(({ data }) => dispatch(setValueRegion({data, region})));
      };
}

export const setValueSubRegion = createAction(ACTION_SET_VALUE_SUB_REGION);
export function getValueSubRegion(subregion) {
    return (dispatch) => {
        api.get('all')
          .then(({ data }) => dispatch(setValueSubRegion({data, subregion})));
      };
}

export const setSearchValue = createAction(ACTION_SET_SEARCH_VALUE);
export function getSearchValue(searchValue) {
    return (dispatch) => {
        api.get('all')
          .then(({ data }) => dispatch(setSearchValue({data, searchValue})));
      };
}