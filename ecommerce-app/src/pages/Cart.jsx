import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <div className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-8 text-5xl font-bold">
                    Your Cart
                </h1>
                {cartItems.length === 0 ? (
                    <p className="text-lg text-gray-500">
                        Your cart is empty.
                    </p>
                ) : (
                    <div className="space-y-5">
                        {cartItems.map((item, index) => (
                            <div key={`${item.id}-${item.size}-${index}`} className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-5 sm:flex-row sm:items-center">
                                {/* IMAGE */}
                                <div className="h-32 w-32 overflow-hidden rounded-xl bg-gray-100">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                </div>
                                {/* INFO */}
                                <div className="flex-1">
                                    <p className="mb-1 text-sm text-gray-500">{item.category}</p>
                                    <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
                                    <p>Size: <strong>{item.size}</strong></p>
                                    <p>Quantity: <strong>{item.quantity}</strong></p>
                                </div>
                                {/* PRICE */}
                                <div>
                                    <p className="text-xl font-bold">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;