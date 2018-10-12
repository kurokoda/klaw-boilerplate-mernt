export const FETCH_HOME_PAGE_DATA = "FETCH_HOME_PAGE_DATA";
export const FETCH_HOME_PAGE_DATA_SUCCESS = "FETCH_HOME_PAGE_DATA_SUCCESS";
export const FETCH_PAGE_DATA_ERROR = "FETCH_PAGE_DATA_ERROR";
export const FLUSH_PAGE_DATA = "FLUSH_PAGE_DATA";
export const HYDRATE_PAGE_DATA = "HYDRATE_PAGE_DATA";

/**
 * Action dispatched when home page data fetch is requested
 * @returns {object} article of type `FETCH_HOME_PAGE_DATA`
 */
export function fetchHomePageData() {
  return {
    type: FETCH_HOME_PAGE_DATA
  };
}

/**
 * Action dispatched when home page data fetch is successful
 * @param {object} payload The response's data
 * @returns {object} article of type `FETCH_HOME_PAGE_DATA_SUCCESS`
 */
export function fetchHomePageDataSuccess(payload: object) {
  return {
    payload,
    type: FETCH_HOME_PAGE_DATA_SUCCESS
  };
}

/**
 * @param {string} error The response error
 * @returns {object} article of type `FETCH_PAGE_DATA_ERROR`
 */
export function fetchPageDataError(error: string) {
  return {
    error,
    type: FETCH_PAGE_DATA_ERROR
  };
}

/**
 * Action dispatched when page data rehydration is ready
 * @param {string} pageType The response's data
 * @param {object} pageData The response's data
 * @returns {object} article of type `HYDRATE_PAGE_DATA`
 */
export function hydratePageData(pageData: object, pageType: string) {
  const type = HYDRATE_PAGE_DATA;
  const payload = { pageData, pageType };

  return {
    payload,
    type
  };
}

/**
 * Action dispatched when page data flushing is requested
 * @returns {object} article of type `FLUSH_PAGE_DATA`
 */
export function flushPageData() {
  return { type: FLUSH_PAGE_DATA };
}
