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
  };
}
export default HydraxSDK;
