import { useDispatch, useSelector } from "react-redux";
import { selectLaptops } from "./store/reducers/laptopSlice";
import { addItem, selectCart } from "./store/reducers/cartSlice";

function App(){

  const dispatch = useDispatch();
  const laptops = useSelector(selectLaptops);
  const cart = useSelector(selectCart)

  const cartLength = cart.length
return(
  <>
    <ul>
      {laptops.map(({id,price,ram,cpu}) => <li>Rs.{price} | {"RAM :"+ram} | {"CPU: "+ cpu} {"     "} <button 
      className="add--to--cart"
      onClick={() => dispatch(addItem(id,price,ram,cpu))}
      >Add To Cart</button> </li>)}
    
    </ul>

    <div className="cart">
      <h1 className="cart--title">Cart <span>{cartLength}</span></h1>
      <h1 className="cart--title">Total: Rs.{
        cartLength > 0
        ?(cart.reduce((acc , i )=>{
          
          return(
            acc += i.price
          
            )
        
          },0)):null
      }</h1> 

        {cart?.map(({price}) => {
            return(
              <div>
                <h4>
                  {price}
                </h4>
              </div>
            )
          })
        }
    </div>
  </>
)
}

export default App;