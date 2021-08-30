// import { AxiosRequestConfig } from 'axios';
import request from '../lib/request';
import { v4 as uuidv4 } from 'uuid';

type IRequestBody<T, U, Z> = {
  [type: string]: T | U | Z
}

type IReturnDataFormat = {
  data: {
    error: {
      message: string
    },
    result: any[]
  }
}


/**
 * Returns the correct data format
 * 
 * @param res response content
 * @returns correct data format
 */
const returnFormatData = (res: IReturnDataFormat) => ({
  success: Boolean(!(res?.data?.error)),
  message: res?.data?.error || "",
  data: res?.data?.result || null,
})

const generateBalances = async () => {
  const { token, userId } = request.getSdkConfig()
  const id = uuidv4()
  // const requestBody: IRequestBody<string, number, any[]> = {
  //   id,
  //   method: 'execute',
  //   params: [
  //     'td.account',
  //     'get_balances',
  //     [],
  //     { user_id: userId },
  //     { user_id: userId, token: token },
  //   ],
  // }

  const requestBody: IRequestBody<string, number, any[]> = {
    id,
    method: 'execute',
    params: [
      'td.account',
      'get_balances',
      [],
      { user_id: userId },
      { user_id: userId, token: token },
    ],
  }
  // const opt: AxiosRequestConfig = {
  //   method: 'POST',
  //   data: {
  //     id,
  //     method: 'execute',
  //     params: requestBody,
  //   },
  // };

  const response = await request.post('/json_rpc', requestBody);
  return returnFormatData(response)
};

export default generateBalances