import { notif } from './notif/notif';

import { getCryptoAddress, getBalances, testConfig } from './td.account';

import { AxiosRequestConfig } from 'axios';

import { setConfig } from "./utils/setConfig";

function HydraxSDK(sdkConfig: SDKConfig) {
  setConfig(sdkConfig)

  return {
    getCryptoAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getCryptoAddress(sdkConfig, options, errorHandler),
    getBalances: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getBalances(sdkConfig, options, errorHandler),

    testConfig: () => testConfig(),
    
    getnotif: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => notif(sdkConfig, options, errorHandler),


  };
}

export default HydraxSDK;
