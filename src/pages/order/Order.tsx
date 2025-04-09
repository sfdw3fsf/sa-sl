// Test ID: IIDSAT

import { useParams } from 'react-router'
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from '../../utils/helpers'
import { useQueries, useQuery } from '@tanstack/react-query'
import { getOrderByIdAPI } from '../../data/order/order.api'
import { OrderDetailRESP } from '../../data/order/response/order.response'
import { RegularResponse } from '../../utils/type/BaseResponse'

const order = {
    id: 'ABCDEF',
    customer: 'Jonas',
    phone: '123456789',
    address: 'Arroios, Lisbon , Portugal',
    priority: true,
    estimatedDelivery: '2027-04-25T10:00:00',
    cart: [
        {
            pizzaId: 7,
            name: 'Napoli',
            quantity: 3,
            unitPrice: 16,
            totalPrice: 48,
        },
        {
            pizzaId: 5,
            name: 'Diavola',
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,
        },
        {
            pizzaId: 3,
            name: 'Romana',
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15,
        },
    ],
    position: '-9.000,38.000',
    orderPrice: 95,
    priorityPrice: 19,
}

function Order() {
    // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

    const { orderId: idParams } = useParams()

    const { data: orderDetail, isLoading } = useQuery({
        queryKey: ['sad', idParams],
        queryFn: () => getOrderByIdAPI(idParams!),

        select: ({ data }: RegularResponse<OrderDetailRESP>) => data,
        enabled: !!idParams,
    })

    const deliveryIn = calcMinutesLeft(orderDetail?.estimatedDelivery)

    return (
        <div>
            <div>
                <h2>Status</h2>

                <div>
                    {orderDetail?.priority && <span>Priority</span>}
                    {/* <span>{status} order</span> */}
                </div>
            </div>

            <div>
                <p>
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(orderDetail?.estimatedDelivery)} minutes left 😃`
                        : 'Order should have arrived'}
                </p>
                <p>
                    (Estimated delivery:{' '}
                    {formatDate(orderDetail?.estimatedDelivery)})
                </p>
            </div>

            <div>
                <p>Price pizza: {formatCurrency(orderDetail?.orderPrice)}</p>
                {orderDetail?.priority && (
                    <p>
                        Price priority:{' '}
                        {formatCurrency(orderDetail?.orderPrice)}
                    </p>
                )}
                <p>
                    To pay on delivery:{' '}
                    {formatCurrency(orderDetail?.priorityPrice)}
                </p>
            </div>
        </div>
    )
}

export default Order
