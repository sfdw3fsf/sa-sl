import { RegularResponse } from '../../utils/type/BaseResponse'
import { instanceDummy } from '../axios'
import { LoginReq } from './request'
import { LoginResp } from './response'

export const loginAPI = (req: LoginReq): Promise<RegularResponse<LoginResp>> =>
   instanceDummy.post('auth/login', { ...req })
