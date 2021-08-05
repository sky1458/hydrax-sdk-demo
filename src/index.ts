import { ErrorHandler } from './index.d';
import { notif } from './notif/notif';
import { getCryptoAddress } from './td.account';
import { AxiosRequestConfig } from 'axios';

function HydraxSDK(url: string, token: string, user_id: string) {
  const commonOption = {
    url,
    token,
    user_id,
  };
  return {
    queryCryptoAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getCryptoAddress({ ...options, ...commonOption }, errorHandler),
    getnotif: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => notif({ ...options, ...commonOption }, errorHandler),
  };
}

export default HydraxSDK;
