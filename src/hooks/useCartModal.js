import { useState } from 'react';
import { useCart } from '../context/useCart';

export function useCartModal() {
    const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
    };

    const handleCheckout = () => {
        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
            setIsCartOpen(false);
        }, 3500);
    };

    const handleClose = () => {
        setIsSuccess(false);
        setIsCartOpen(false);
    };

    return {
        cart,
        isCartOpen,
        isSuccess,
        totalPrice,
        formatRupiah,
        handleCheckout,
        handleClose,
        updateQuantity,
        removeFromCart,
    };
}
