import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, course) => total + course.price, 0).toFixed(2);
    const styleForText = {textAlign: 'center',}
    return (
        <div>
                        <h4 style={styleForText}>Order Summery</h4>
            <p style={styleForText}>Items Ordered:{cart.length} </p>
            <p style={styleForText}>Total price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;