import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img3 from "../add-to-cart/images/2.png";
import img2 from "../add-to-cart/images/3.png";
import img4 from "../add-to-cart/images/4.png";
import img5 from "../add-to-cart/images/5.png";
import SuccessAlert from './Sucess';  // Corrected capitalization of Success
import AlreadyAdded from "./AlreadyAdded";

const dummyProducts = [
  {
    productId: 1,
    name: "UX/UI Course",
    img: img2,
    price: "$ 99",
  },
  {
    productId: 2,
    name: "Web Development",
    img: img3,
    price: "$ 199",
  },
  {
    productId: 3,
    name: "Fronted Development",
    img: img4,
    price: "$ 90",
  },
  {
    productId: 4,
    name: "Services Course",
    img: img5,
    price: "$ 59",
  },
];

const MainSection = () => {
  const [cart, setCart] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

 
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCart(savedCart);
  }, []);

  const handleClick = (product) => {
    const isAlreadyInCart = cart.find(item => item.productId === product.productId);

    if (isAlreadyInCart) {
      setAlreadyAdded(true);
      setTimeout(() => {
        setAlreadyAdded(false);
      }, 2000);
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }
  };

  return (
    <div>
      {/* Success and Already Added Alerts */}
      {showSuccess && <SuccessAlert showSuccess={showSuccess} />}
      {alreadyAdded && <AlreadyAdded alreadyAdded={alreadyAdded} />}

      <div className="d-flex justify-content-center gap-4 mt-3">
        {dummyProducts.map((product, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5>{product.name}</h5>
              <p className="card-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident.</p>
              <h4>{product.price}</h4>
              <button onClick={() => handleClick(product)} className="btn btn-danger">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
