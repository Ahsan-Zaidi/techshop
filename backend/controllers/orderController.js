import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc CREATE new order
// @route POST /api/orders
// @Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error ('No order items');
    } else {
        const order = new Order({
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }
});

// @desc get logged User orders
// @route GET /api/orders/myorders
// @Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
});

// @desc get order by ID
// @route GET /api/orders/:id
// @Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc update order to paid
// @route GET /api/orders/:id/pay
// @Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update order to paid')
});

// @desc update order to delivered
// @route GET /api/orders/:id/deliver
// @Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update order to delivered')
});

// @desc get all orders
// @route POST /api/orders
// @Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('get All orders')
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
};

