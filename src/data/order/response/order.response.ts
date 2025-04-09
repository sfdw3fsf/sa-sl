export type OrderDetailRESP = {
    customer: string
    estimatedDelivery: Date
    id: string
    orderPrice: number
    priority: boolean
    priorityPrice: number
    status: string
    cart: cartItem[]
}

export type cartItem = {
    addIngredients: []
    name: string
    pizzaId: number
    quatity: number
    removeIngredient: []
    totalPrice: number
    unitPrice: number
}
