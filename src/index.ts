import { AxiosRequestConfig } from 'axios';

import { getCryptoAddress, getBalances, getUserInfo } from './account';
import { getAddress } from './address/getAddress';
import { queryNotificationList } from './notification';

function HydraxSDK(config: SDKConfig) {
  return {
    getNotificationList: (
      params?: PgaeInfoParams,
      errorHandler: ErrorHandler = () => null
    ) => queryNotificationList(config, params, errorHandler),

    getCryptoAddress: (
      errorHandler: ErrorHandler = () => null
    ) => getCryptoAddress(config, null, errorHandler),
    getBalances: (
      errorHandler: ErrorHandler = () => null
    ) => getBalances(config, null, errorHandler),
    getUserInfo: (
      params?: { userInfo: string[] },
      errorHandle?: ErrorHandler
    ) => getUserInfo(config, params, errorHandle),
  };
}
export default HydraxSDK;


