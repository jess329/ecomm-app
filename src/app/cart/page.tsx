"use client"
import { useCart } from "../context/CartProvider";

export default function Cart() {
    const cart = useCart()
    console.log(cart.cartItems);

    return (
        <main className="text-black mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Your Shopping Cart</h1>
            <div>
                {cart.cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 mb-4">
                        {/* Bild */}
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-20 h-28 object-cover rounded-md"
                        />

                        {/* Titel + Preis */}
                        <div className="flex-1 ml-4">
                            <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                            <p className="text-sm text-gray-500">
                            {item.price ? `${item.price.toFixed(2)} €` : "Preis nicht verfügbar"}
                            </p>
                        </div>

                        {/* Anzahl-Auswahl */}
                        <div className="flex items-center gap-2">
                            <button
                            disabled={item.quantity <= 1}
                            className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                            >
                            -
                            </button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <button className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer">
                            +
                            </button>
                        </div>

                        {/* Entfernen */}
                        <button
                            className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                        >
                            Remove
                        </button>

                    </div>
                ))}
            </div>
        </main>
    );
}