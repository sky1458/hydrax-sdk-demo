import { AxiosRequestConfig } from 'axios';

import request from '../lib/request';

/**
  * 
  * This function gets user notifications
   @options type:AxiosRequestConfig,Optional parameters passed in: { params:{ limit:10, offset:10} }
   @returns return object
 */

export async function queryNotificationList(
  optionsDefault?: SDKConfig,
  options: AxiosRequestConfig = {},
  errorHandler?: ErrorHandler
) {
  const { token, userId, url } = optionsDefault;
  const cond = [['user_id', '=', userId]];
  const fields = ['time', 'title', 'state', 'data'];
  const { params: pms = {} } = options;
  const { limit = 10, offset = 10 } = pms;
  const params = [
    'notif',
    'search_read_path',
    [cond, fields],
    { order: 'time desc', count: true, limit, offset },
    {
      user_id: userId,
      token: token,
    },
  ];

  const optionsData: AxiosRequestConfig = {
    data: {
      id: new Date().getTime(),
      method: 'execute',
      params,
    },
  };

  const response = await request(url, optionsData, errorHandler);
  if (!response.data.error) {
    return { data: response.data.result[0], total: response.data.result[1] };
  } else {
    return { error: response.data.error };
  }
}
