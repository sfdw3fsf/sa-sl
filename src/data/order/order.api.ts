import { RegularResponse } from '../../utils/type/BaseResponse'
import { instance } from '../axios'
import { OrderDetailRESP } from './response/order.response'

export const getOrderByIdAPI = (
    id: string
): Promise<RegularResponse<OrderDetailRESP>> => {
    return instance.get(`order/${id}`)
}
