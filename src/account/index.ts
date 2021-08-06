import { AxiosRequestConfig } from 'axios';
import request from '../utils/request';

type IRequestBody<T, U, Z> = {
  [type: string]: T | U | Z
}
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
  const { token = '', user_id = '', url = '' } = sdkConfig;
  const requestBody: IRequestBody<string, number, any[]> = {
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
  }
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

/**
 * Get user current balances
 * 
 * @returns user current balances
 */
const getBalances = async (
  sdkConfig: SDKConfig,
  _: AxiosRequestConfig,
  errorHandler: ErrorHandler
) => {
  const { token, user_id = '', url = '' } = sdkConfig;
  const requestBody: IRequestBody<string, number, any[]> = {
    id: Date.now(),
    method: 'execute',
    params: [
      'td.account',
      'get_balances',
      [],
      { user_id: user_id },
      { user_id: user_id, token: token },
    ],
  }
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
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
  const { token = '', user_id = '', url = '' } = sdkConfig;
  const requestBody: IRequestBody<string, number, any[]> = {
    id: Date.now(),
    method: 'execute',
    params: [
      'td.account',
      'search_read',
      [
        [['user_id', '=', user_id]],
        options?.userInfo ?? ['name', 'email', 'phone', 'enable_quick_order']
      ],
      {},
      { user_id: user_id, token: token },
    ],
  }
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

export { getCryptoAddress, getBalances, getUserInfo }
