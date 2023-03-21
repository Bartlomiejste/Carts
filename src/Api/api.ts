export const fetchCartsItems = async () => {
        try {
        const res = await fetch("https://dummyjson.com/carts");
        const data = await res.json();
        return data.carts
        } catch (error) {
          console.error(error);
        }
      };

export const getAllProducts = async()=>{
 try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        return data.products
        } catch (error) {
          console.error(error);
        }
      
}
 



