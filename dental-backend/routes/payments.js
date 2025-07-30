const express = require('express');
const router = express.Router();

// Mock payment orders storage
let mockPaymentOrders = [];
let orderIdCounter = 1000;

// Create payment order
router.post('/create-order', (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;
    
    const newOrder = {
      id: `order_${orderIdCounter++}`,
      amount: amount * 100, // Convert to paise for Razorpay format
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      status: 'created',
      createdAt: new Date().toISOString()
    };
    
    mockPaymentOrders.push(newOrder);
    
    res.json({
      id: newOrder.id,
      amount: newOrder.amount,
      currency: newOrder.currency,
      receipt: newOrder.receipt
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Verify payment
router.post('/verify', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    // In real implementation, verify the signature here
    // For mock, just return success
    const order = mockPaymentOrders.find(o => o.id === razorpay_order_id);
    if (order) {
      order.status = 'paid';
      order.paymentId = razorpay_payment_id;
      order.paidAt = new Date().toISOString();
    }
    
    res.json({
      success: true,
      message: 'Payment verified successfully',
      orderId: razorpay_order_id
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get payment orders
router.get('/orders', (req, res) => {
  try {
    res.json(mockPaymentOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
