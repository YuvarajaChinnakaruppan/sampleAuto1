/*************************************************
 * CommonSetup
 * @exports
 * HttpClient.ts
 * Created by Abdul on 06/07/2023
 * Copyright © 2023 CommonSetup. All rights reserved.
 *************************************************/

// imports
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// utilities
import {getBaseURL, REFRESH_TOKEN} from './URL';
import {RootState, store} from '../redux/store';
// import {CustomError} from '../entities/ErrorObject';
import Utility, {navigateAndSimpleReset} from './Utility';

const NetworkError = {
  error: {
    status: 408,
    statusText: 'Bad Request',
    data: {
      code: 408,
      status: 'Network Error',
      message: 'Please check your internet connectivity',
    },
  },
};

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseURL(),
  prepareHeaders: (headers, {getState}) => {
    headers.set('Content-Type', 'application/json');
    headers.set('cache-control', 'no-cache');

    const token = (getState() as RootState).auth.tokenDetails;

    // if token is available, include the token to the headers
    if (token?.access.token) {
      headers.set('Authorization', `Bearer ${token.access.token}`);
    }

    return headers;
  },
});

// API Logic
const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // check if network connection is available or not
  const isNetworkavailable = store.getState().device.isNetworkAvailable;
  if (!isNetworkavailable) {
    return NetworkError;
  }

  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (args?.url === REFRESH_TOKEN) {
      Utility.showSnackBar('error');
    }

    // try to get a new token for unauthorised access
    const refreshToken = store.getState().auth.tokenDetails?.refresh.token;
    const refreshResult: any = await baseQuery(
      {
        url: REFRESH_TOKEN,
        method: 'POST',
        body: {refreshToken},
      },
      api,
      extraOptions,
    );

    if (refreshResult.data && refreshResult?.data?.code === 200) {
      // store the new token
      //   store.dispatch(setTokenDetails(refreshResult.data.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      navigateAndSimpleReset('auth');
    }
  } else if (result.error && result.error.status === 400) {
    if (
      result.error.data?.error?.message &&
      result.error.data?.error?.message !== 'null'
    ) {
      setTimeout(() => {
        Utility.showSnackBar('error');
      }, 500);
    }
  } else if (result.error && result.error.status === 'FETCH_ERROR') {
    return NetworkError;
  } else if (result.error && result.error.status === 404) {
    Utility.showSnackBar('error');
  }

  return result;
};

export const HTTPClient = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
