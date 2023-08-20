let Checkout = () => import('../pages/Checkout')
let OrderConfirmed = () => import('../pages/OrderConfirmed')

export default [
    {
        path: '/checkout',
        component: Checkout,
        name: 'Checkout',
        meta: { requiresAuth: true },
    },
    {
        path: '/order-confirmed',
        component: OrderConfirmed,
        name: 'OrderConfirmed',
        meta: { requiresAuth: true },
    },
]