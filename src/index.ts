import { AxiosRequestConfig } from 'axios';

import { getCryptoAddress, getBalances, getUserInfo } from './account';
import { getAddress } from './address/getAddress';
import { queryNotificationList } from './notification';

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
    getUserInfo: (userInfo?: string[], errorHandle?: ErrorHandler) =>
      getUserInfo(sdkConfig, userInfo, errorHandle),
    getNotificationList: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => queryNotificationList(sdkConfig, options, errorHandler),
    getAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getAddress(sdkConfig, options, errorHandler),
  };
}
export default HydraxSDK;
