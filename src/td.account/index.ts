import { AxiosRequestConfig } from "axios";
import request from '../utils/request';

import { getConfig } from "../utils/setConfig";

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
  _: AxiosRequestConfig,
  errorHandler: ErrorHandler
) => {
  const sdkConfig = getConfig()
  const { token = '', user_id = '', url = '', } = sdkConfig as SDKConfig;
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
  const { user_id = '', url = '', } = sdkConfig;
  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: {
      id: Date.now(),
      method: 'execute',
      params: [
        'td.account',
        'get_balances',
        [],
        { user_id: user_id, },
      ],
    },
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

const testConfig = () => getConfig()


export { getCryptoAddress, getBalances, testConfig }