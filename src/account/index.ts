import { AxiosRequestConfig } from 'axios';
import request from '../lib/request';

/**
 *
 * @param id Date.now()
 * @param method the method of rpc_execute
 * @param params get parameters of data
 * @returns
 */

// type IRequestBody = {
//   id: number;
//   method: string;
//   params: any[];
// };
// const setRequestBody = (requestBodyConfig: IRequestBody) => {
//   const { id, method, params } = requestBodyConfig;
//   return { id, method, params };
// };

/**
 * ### Meaning of common parameters
 *
 * @param sdkConfig initial user infomation
 * @param _ users do not need to pass in configuration
 * @param errorHandler behavior when an error occurs
 */

/**
 * Get a string of encrypted addresses
 *
 * @returns a string of encrypted addresses
 */
const getCryptoAddress = async (
  sdkConfig: SDKConfig,
  _: AxiosRequestConfig,
  errorHandler: ErrorHandler
) => {
  const { token = '', userId = '', url = '' } = sdkConfig;
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: {
      id: Date.now(),
      method: 'execute',
      params: [
        'td.account',
        'search_read_path',
        [['user_id', '=', userId], ['crypto_addr']],
        {},
        {
          user_id: userId,
          token: token,
        },
      ],
    },
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

/**
 *
 * Get user current balances
 *
 * @returns user current balances
 */
const getBalances = async (
  sdkConfig: SDKConfig,
  _: AxiosRequestConfig,
  errorHandler: ErrorHandler
) => {
  const { token, userId = '', url = '' } = sdkConfig;
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: {
      id: Date.now(),
      method: 'execute',
      params: [
        'td.account',
        'get_balances',
        [],
        { user_id: userId },
        { token: token },
      ],
    },
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

/**
 * Get user information
 *
 * @param options.userInfo parameters about user information
 * @returns data obtained through 'optionsData'
 */
const getUserInfo = async (
  sdkConfig: SDKConfig,
  options: { userInfo?: string[] },
  errorHandler: ErrorHandler
) => {
  const { token = '', userId = '', url = '' } = sdkConfig;
  const requestBody = {
    id: Date.now(),
    method: 'execute',
    params: [
      'td.account',
      'search_read',
      [
        [['user_id', '=', userId]],
        options?.userInfo ?? ['name', 'email', 'phone', 'enable_quick_order'],
      ],
      {},
      { user_id: userId, token: token },
    ],
  };
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

export { getCryptoAddress, getBalances, getUserInfo };
