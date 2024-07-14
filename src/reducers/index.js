import { Productinfo } from "../Component/Productlist";

const initialState = {
    cartcount: 0,
    products:Productinfo,
    cart:[],
    orders: []
    
  };
  

    const counterReducer = (state = initialState, action) => {
      console.log(action);
      switch (action.type) {
          case "AddtoCart":
          
              const existingProductIndex = state.cart.findIndex(item => item.id === action.data.id);
              const existingProductIndex1 = state.products.findIndex(item => item.id === action.data.id);
              console.log(existingProductIndex1)
              if (existingProductIndex >= 0) {
                
                  const updatedCart = state.cart.map((item, index) =>
                      index === existingProductIndex ? { ...item, qty: item.qty + 1 ,} : item
                  );
                  const updatedProduct = state.products.map((item, index) =>
                    index === existingProductIndex1 ? { ...item, qty: item.qty + 1 } : item
                );
                  return { ...state, products: updatedProduct, cart: updatedCart };
              } else {
                const findproduct =state.products.findIndex(item => item.id === action.data.id)
                const Updatedproductflag = state.products.map((item, index) =>
                  index === findproduct ? { ...item, iscart: "Y" } : item
              );
                  return { ...state, cart: [...state.cart, { ...action.data, qty: 1 ,}] , products:Updatedproductflag};
              }
          case "RemovetoCart":
              
              const productIndex = state.cart.findIndex(item => item.id === action.data.id);
              if (productIndex >= 0) {
                  const updatedCart = state.cart.map((item, index) =>
                      index === productIndex ? { ...item, qty: item.qty - 1, } : item
                  ).filter(item => item.qty > 0);
                  const updatedProduct = state.products.map((item, index) =>
                    index === productIndex ? { ...item, qty: item.qty - 1 } : item
                ).filter(item => item.qty > 0);
                  return { ...state, cart: updatedCart ,products:updatedProduct};
              }
              return {...state,products:state.products};
              case "OrderPlace":
                return {...state,cart:[], orders:[...state.orders ,...action.data],products:Productinfo}
          default:
              return state;
      }

  
  };
  
  export default counterReducer;
  