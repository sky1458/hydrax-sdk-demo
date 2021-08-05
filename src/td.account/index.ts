import { AxiosRequestConfig } from 'axios';
import request from '../utils/request';

/**
 * ### Meaning of common parameters
 *
 * @param sdkConfig initial user infomation
 * @param _ users do not need to pass in configuration
 * @param errorHandler behavior when an error occurs
 */

/**
 *
 * Get a string of encrypted addresses
 * @returns a string of encrypted addresses
 */
const getCryptoAddress = async (
  sdkConfig: SDKConfig,
  _: AxiosRequestConfig,
  errorHandler: ErrorHandler
) => {
  const { token = '', user_id = '', url = '' } = sdkConfig;
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: {
      id: Date.now(),
      method: 'execute',
      params: [
        'td.account',
        'search_read_path',
        [['user_id', '=', user_id], ['crypto_addr']],
        {},
        {
          user_id: user_id,
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
 * @returns user current balances
 */
const getBalances = async (
  sdkConfig: SDKConfig,
  _: AxiosRequestConfig,
  errorHandler: ErrorHandler
) => {
  const { token, user_id = '', url = '' } = sdkConfig;
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: {
      id: Date.now(),
      method: 'execute',
      params: [
        'td.account',
        'get_balances',
        [],
        { user_id: user_id },
        { token: token },
      ],
    },
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

/**
 *
 * @param uesrInfo parameters about user information
 * @returns data obtained through 'optionsData'
 */
const getUserInfo = async (
  sdkConfig: SDKConfig,
  uesrInfo: string[],
  errorHandler: ErrorHandler
) => {
  const { token = '', user_id = '', url = '' } = sdkConfig;
  const requestBody = {
    id: Date.now(),
    method: 'execute',
    params: [
      'td.account',
      'search_read',
      [
        [['user_id', '=', user_id]],
        uesrInfo ?? ['name', 'email', 'phone', 'enable_quick_order'],
      ],
      {},
      { user_id: user_id, token: token },
    ],
  };
  const options: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
  };
  const data = await request(url, options, errorHandler);
  return data;
};

export { getCryptoAddress, getBalances, getUserInfo };
