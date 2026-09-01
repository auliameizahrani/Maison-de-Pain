import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle2 } from 'lucide-react';
import {useCartModal} from '../hooks/useCartModal';

export default function CartModal() {
    const {
        cart,
        isCartOpen,
        isSuccess,
        totalPrice,
        formatRupiah,
        handleCheckout,
        handleClose,
        updateQuantity,
        removeFromCart,
    } = useCartModal();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-sm transition-opacity">
            <div className="w-full max-w-md bg-[#231F1E] h-full shadow-2xl flex flex-col border-l border-[#3A322E] text-white">
                
                <div className="flex items-center justify-between p-6 border-b border-[#3A322E]">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-[#C88A58]" />
                        <h2 className="font-serif font-bold text-lg">Your Order</h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full bg-[#2A2421] text-[#C5B5AE] hover:text-white transition cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {isSuccess ? (
                    <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <div className="w-16 h-16 bg-[#2A2421] rounded-full flex items-center justify-center text-[#C88A58] border border-[#C88A58]/30 shadow-inner">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-white">Order Successful!</h3>
                        <p className="text-sm text-[#C5B5AE] leading-relaxed">
                            Thank you for your order. Your items are now being prepared by Maison de Pain.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex-grow overflow-y-auto p-6 space-y-4">
                            {cart.length === 0 ? (
                                <div className="text-center py-20 text-[#C5B5AE]">
                                    <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                                    <p className="text-sm">Your cart is currently empty.</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 bg-[#1A1716] p-4 rounded-2xl border border-[#3A322E]">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-serif font-bold text-sm text-white">{item.name}</h4>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-400 transition p-1"
                                                    title="Remove item"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-xs text-[#C88A58] font-semibold mt-0.5">{item.price}</p>
                                            
                                            <div className="flex items-center gap-3 mt-3">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-6 h-6 rounded-lg bg-[#2A2421] flex items-center justify-center text-[#C5B5AE] hover:text-white transition"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-xs font-bold text-white">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-6 h-6 rounded-lg bg-[#2A2421] flex items-center justify-center text-[#C5B5AE] hover:text-white transition"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t border-[#3A322E] bg-[#1A1716] space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-[#C5B5AE]">Total Amount:</span>
                                    <span className="text-lg font-bold text-[#C88A58]">{formatRupiah(totalPrice)}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-3.5 bg-[#C88A58] hover:bg-[#B27646] text-white font-medium text-sm rounded-xl transition-shadow shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    );
}