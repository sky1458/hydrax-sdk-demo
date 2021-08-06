import { AxiosRequestConfig } from 'axios';

import { getCryptoAddress, getBalances, getUserInfo } from './account';
import { getAddress } from './address/getAddress';
import { notif } from './notif/notif';

function HydraxSDK(sdkConfig: SDKConfig) {
  return {
    getCryptoAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getCryptoAddress(sdkConfig, options, errorHandler),
    getBalances: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getBalances(sdkConfig, options, errorHandler),
    getUserInfo: (
      options?: { userInfo?: string[] }, errorHandle?: ErrorHandler
    ) => getUserInfo(sdkConfig, options, errorHandle),
    getnotif: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => notif(sdkConfig, options, errorHandler),
    getAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getAddress(sdkConfig, options, errorHandler),
  };
}

export default HydraxSDK;
