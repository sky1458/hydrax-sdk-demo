import { AxiosRequestConfig } from 'axios';
import request from '../lib/request';

type IRequestBody<T, U, Z> = {
  [type: string]: T | U | Z
}

type IReturnData = {
  data: {
    error: {
      message: string
    },
    result: any[]
  }
}

/**
 * Returns the correct data format
 * 
 * @param res response content
 * @returns correct data format
 */
const returnData = (res: IReturnData) => ({
  success: Boolean(!(res?.data?.error)),
  message: res?.data?.error || "",
  data: res?.data?.result || null,
})

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
  _: null,
  errorHandler: ErrorHandler
) => {
  const { token = '', userId = '', url = '' } = sdkConfig;
  const requestBody: IRequestBody<string, number, any[]> = {
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
  }
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
  };
  const response = await request(url, opt, errorHandler) as IReturnData;
  return returnData(response)
};

/**
 * Get user current balances
 *
 * @returns user current balances
 */
const getBalances = async (
  sdkConfig: SDKConfig,
  _: null,
  errorHandler: ErrorHandler
) => {
  const { token, userId = '', url = '' } = sdkConfig;
  const requestBody: IRequestBody<string, number, any[]> = {
    id: Date.now(),
    method: 'execute',
    params: [
      'td.account',
      'get_balances',
      [],
      { user_id: userId },
      { user_id: userId, token: token },
    ],
  }
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
  };
  const response = await request(url, opt, errorHandler) as IReturnData;
  return returnData(response)
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
  const requestBody: IRequestBody<string, number, any[]> = {
    id: Date.now(),
    method: 'execute',
    params: [
      'td.account',
      'search_read',
      [
        [['user_id', '=', userId]],
        options?.userInfo || ['name', 'email', 'phone', 'enable_quick_order'],
      ],
      {},
      { user_id: userId, token: token },
    ],
  }
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: requestBody,
  };
  const response = await request(url, opt, errorHandler) as IReturnData;
  return returnData(response)
};

export { getCryptoAddress, getBalances, getUserInfo }
