import { Productinfo } from "../Component/Productlist";

const initialState = {
    cartcount: 0,
    products:Productinfo,
    cart:[],
    
  };
  

    const counterReducer = (state = initialState, action) => {
      console.log(action);
      switch (action.type) {
          case "AddtoCart":
          
              const existingProductIndex = state.cart.findIndex(item => item.id === action.data.id);
              if (existingProductIndex >= 0) {
                
                  const updatedCart = state.cart.map((item, index) =>
                      index === existingProductIndex ? { ...item, qty: item.qty + 1 } : item
                  );
                  const updatedProduct = state.products.map((item, index) =>
                    index === existingProductIndex ? { ...item, qty: item.qty + 1 } : item
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
                      index === productIndex ? { ...item, qty: item.qty - 1 } : item
                  ).filter(item => item.qty > 0);
                  const updatedProduct = state.products.map((item, index) =>
                    index === productIndex ? { ...item, qty: item.qty - 1 } : item
                ).filter(item => item.qty > 0);
                  return { ...state, cart: updatedCart ,products:updatedProduct};
              }
              return state;
          default:
              return state;
      }

  
  };
  
  export default counterReducer;
  