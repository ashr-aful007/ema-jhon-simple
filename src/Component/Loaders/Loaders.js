import { getStoredCart } from "../../utilities/fakedb";

export const Loaders = async () => {
     //get products data
     const productsData = await fetch('products.json');
     const products = await productsData.json()

     //get cart
     const savedCart = getStoredCart();
     const previousCart = [];


     //check all products use id 
     //find select item with === 
     for(const id in savedCart){
          const addProduct = products.find(product => product.id === id);
         if(addProduct){
          const quantity = savedCart[id];
          addProduct.quantity = quantity;
          previousCart.push(addProduct)
         }
     }
     return {products: products, initialCart: previousCart}
}