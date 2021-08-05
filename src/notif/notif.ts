import { AxiosRequestConfig } from 'axios';

// import { ErrorHandler, SDKConfig } from '../index.d';
import request from "../utils/request";


export async function notif( optionsDefault?: SDKConfig, options:AxiosRequestConfig={},errorHandler?: ErrorHandler) {
  const { token,user_id,url } = optionsDefault;
  const cond = [['user_id', '=', user_id]];
  const fields = ['time', 'title', 'state', 'data'];
  const limit:number = options.params.limit
  const offset:number = options.params.offset
  const params = [
    'notif',
    'search_read_path',
    [cond, fields],
    { order: 'time desc', count: true, limit, offset},
    {
      "user_id": user_id,
      "token": token,
    }
  ];
  
  const optionsData:AxiosRequestConfig = {
    data:{
      id: new Date().getTime(),
      method: 'execute',
      params,
    }
  }
  
  const response = await request(url, optionsData, errorHandler);

  return response;
}
