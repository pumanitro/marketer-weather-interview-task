import isEmpty from 'lodash/isEmpty';

type BuildUrl = (url: string, queryPath: string | string[], queryParams?: Record<string, string>) => string;

type getUrlBuilder = (url: string) => (queryPath: string | string[], queryParams?: Record<string, string>) => string;

export const buildUrl: BuildUrl = (url, queryPath, queryParams = {}) => {
  url = url.endsWith('/') ? url : `${url}/`;
  queryPath = queryPath instanceof Array ? queryPath.join('/') : queryPath;
  if (!isEmpty(queryParams)) {
    queryPath = queryPath.concat('?');
  }
  return `${url}${queryPath}${Object.entries(queryParams)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')}`;
};

export const getUrlBuilder: getUrlBuilder = url => (queryPath, queryParams = {}) => {
  return buildUrl(url, queryPath, queryParams);
};

export default buildUrl;
