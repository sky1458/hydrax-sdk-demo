import { AxiosRequestConfig } from 'axios';

import { getAddress } from './address/getAddress';
import { notif } from './notif/notif';
import { getCryptoAddress, getBalances } from './td.account';


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
