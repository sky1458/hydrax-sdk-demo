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
  params: PageInfoParams = {},
  errorHandler?: ErrorHandler
): Promise<CustomResponse> {
  const { token, userId, url } = optionsDefault;
  const cond = [['user_id', '=', userId]];
  const fields = ['time', 'title', 'state', 'data'];
  const { limit = 10, offset = 10 } = params;
  const formatParams = [
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
      params: formatParams,
    },
  };

  const response = await request(url, optionsData, errorHandler);
  const { error = '', result = [] } = response.data;
  const [data, total] = result;
  if (!error) {
    return {
      success: !!error,
      data: {
        list: data,
        total: total,
      },
      message: error,
    };
  }
  return { success: !!error, data: null, message: 'success' };
}
