import logo from './logo.svg';
import './App.css';
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import { Link } from 'react-router-dom';


function App() {

  const arrayItem = [
    {
    id : 1,
    imageSrc : image1,
    title :"Shirt",
    price : '4566'
    },
    {
      id : 2,
      imageSrc : image2,
      title : "Trouser",
      price : '456'
    },
    {
      id : 3,
      imageSrc : image3,
      title : "Shirt",
      price : '5600'
    },
    {id : 4,
      imageSrc : image4,
      title : "Trouser",
      price : '4226'
    }

  ]

  let CartStorage=[];

  const  addToCart = (e, id) => {
    e.preventDefault();
    const goToCart = arrayItem.filter(item => item.id === id)
    CartStorage.push(goToCart);
    alert("Successfully added to Cart");
  }


  const Box = ({image, title, price, id}) => (
    <div className="Box">
        <div className="col-md-6 m-5">
          <img src={image} alt="Logo" />
            <h2>{title}</h2>
            <h2> ${price}</h2>
        <button type="button" class="btn btn-primary" onClick={(e) => addToCart(e, id)}>
            Add to Cart
        </button>
        </div>

    </div>
  )

  return (
    <div className="container" >  
     <div className="col-md-12 row" >
          {
            arrayItem.map((item, id) => (
              <Box image={item.imageSrc} key={`cart${id +1}`} id={item.id}  title={item.title} price={item.price}/>
            ))
          }
       </div>  
        
       <button type="button" class="btn btn-primary">
       <Link to={{ 
        pathname: "/cart", 
        state: CartStorage
        }}>
          Go Cart
        </Link>
        </button>
         
    </div>
  );
}

export default App;
