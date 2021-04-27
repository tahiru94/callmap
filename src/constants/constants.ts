const BASE_URL = process.env.PROD ? process.env.PROD_URL : 'http://0.0.0.0:8080'

export const CALLMAP_API_BASE_URL = `${BASE_URL}/v1/callmap-record`;
export const CALLMAP_API_GET_LATEST_URL = `${CALLMAP_API_BASE_URL}/latest`;
export const CALLMAP_API_GET_ALL_URL = `${CALLMAP_API_BASE_URL}/all`;

export const CALLMAP_API_OPERATION_BY_ID_URL = `${CALLMAP_API_BASE_URL}/id`;