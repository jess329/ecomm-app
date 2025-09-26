"use client";

import { createContext, ReactNode, useContext, useState } from "react";

// type CartItem defines the structure for one item inside the cart
export type CartItem = {
    id: string;
    imageUrl: string;
    title: string;
    price?: number;
    quantity: number;
}

// type CartContextType defines what you can do with the CartContext
// here you can get the array with all cart items and add one item to the cart with addToCart
type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider-Component
// all children of the provider can use CartContext directly, no matter the depth
export function CartProvider({children}: {children: ReactNode}) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addToCart(item: CartItem) {
        // ...
        setCartItems([...cartItems, item])
        console.log(cartItems);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// own hook useCart to get CartContext
export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart muss innerhalb von CartProvider verwendet werden");
    }
    return context;
}