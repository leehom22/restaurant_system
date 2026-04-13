import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addToCart: (state,action) => {
            state.items.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/slices/cartSlice";

// const MenuItem = ({ item }) => {

//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     dispatch(addToCart(item));
//   };

//   return (
//     <button onClick={handleAdd}>
//       Add to Cart
//     </button>
//   );
// };

// import { useSelector } from "react-redux";

// const Cart = () => {

//   const cartItems = useSelector((state) => state.cart.items);

//   return (
//     <div>
//       {cartItems.map(item => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// };