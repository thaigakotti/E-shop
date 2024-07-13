import { products } from "../Component/Productlist";

const initialState = {
    counter: 0,
    products:products,
    cart:[],
    
  };
  
  const counterReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
      case "DECREMENT":
        return { ...state, counter: state.counter - 1 };
        case "AddtoCart":
          return { ...state, cart: [...state.cart, action.Productdata] };
        case "RemovetoCart":
          return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  