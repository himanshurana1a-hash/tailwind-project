import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart?.items ?? []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <div>
              {item.title} - ${item.price} × {item.quantity}
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-2 py-1 rounded-lg active:scale-95 hover:bg-red-800">Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;