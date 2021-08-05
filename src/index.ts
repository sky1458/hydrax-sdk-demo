import { notif } from './notif/notif';

import { getCryptoAddress, getBalances, getUserInfo } from './td.account';

import { AxiosRequestConfig } from 'axios';

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
      userInfo: string[], errorHandle?: ErrorHandler
    ) => getUserInfo(sdkConfig, userInfo, errorHandle),
    getnotif: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => notif(sdkConfig, options, errorHandler),
  };
}

export default HydraxSDK;
