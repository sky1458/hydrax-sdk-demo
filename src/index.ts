import { notif } from './notif/notif';

import { getCryptoAddress } from './td.account';

import { AxiosRequestConfig } from 'axios';
/**
 * @param url - backend api url
 * @returns - Promise object
 */
function HydraxSDK(sdkConfig: SDKConfig) {
  return {
    getCryptoAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ): Promise<any> => getCryptoAddress(sdkConfig, options, errorHandler),
    getnotif: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ): Promise<any> => notif(sdkConfig, options, errorHandler),
  };
}

export default HydraxSDK;
