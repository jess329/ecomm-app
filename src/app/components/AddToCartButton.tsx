"use client";

import { CartItem, useCart } from "../context/CartProvider";


export function AddToCartButton({id, imageUrl, title, price, quantity}: CartItem) {
    const cart = useCart()

    return (
        <button onClick={() => {
                    cart.addToCart({id, imageUrl, title, price, quantity: 1})}
                }
                className="
        flex items-center gap-2
        bg-gradient-to-r from-indigo-500 to-purple-600
        text-white font-semibold
        px-2 py-1 mt-2 rounded-xl
        shadow-md hover:shadow-lg
        transition-transform transform hover:scale-105
        active:scale-95 cursor-pointer
      ">
                Add to Cart
                
        </button>
    )
}