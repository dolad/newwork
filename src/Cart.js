import React from 'react';
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import './App.css';
import { useHistory } from "react-router-dom";

function Cart(props) {
    let history = useHistory();
    const CartArray = history.location.state

    const Box = ({image, title, price, id}) => (
        <div className="Box">
            <div className="col-md-6 m-5">
              <img src={image} alt="Logo" />
                <h2>{title}</h2>
                <h2> ${price}</h2>
            </div>
    
        </div>
      )
    

    return (
        <div className="container" >  
        <div className="col-md-12 row" >
             {
               CartArray.map((item, id) => (
                 <Box image={item.imageSrc} key={`cart${id +1}`} id={item.id}  title={item.title} price={item.price}/>
               ))
             }
          </div>  
       
   
       </div>
    );
}

export default Cart;