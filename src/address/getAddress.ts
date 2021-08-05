import { AxiosRequestConfig } from 'axios';

import request from "../utils/request";


 /**
  * 
  * This function gets user address
   @returns return object
 */

export async function getAddress( optionsDefault?: SDKConfig, _?:AxiosRequestConfig,errorHandler?: ErrorHandler) {
  const { token,user_id,url } = optionsDefault;
  const conditions = [['account_id.user_id', '=', user_id]]
  const fields = ['asset_type_id.name', 'asset_type_id.code', 'address']
  const params = [
    'td.addr',
    'search_read_path',
    [conditions, fields],
    {},
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
  if(!response.data.error){
    return response
    // return { data:response.data.result[0], total:response.data.result[1]}  
  }else{
    return { error: response.data.error}
  }
}