import React, { useContext } from "react";
import { MainContext } from "../../Context/context";
import ProductCard from "../../Components/ProductCard";

const Basket = () => {
  const { products,student, color, setColor, setStudent } = useContext(MainContext);

  const changeColor = () => {
    if(student == 'Haralisan'){
      setColor('green')
    } else {
      setColor('red')
    }
  }

  const changeName = () => {
    setStudent( 'Kurdemirli' ? 'Sumqayitli' : 'Kurdemirli')
  }

  return (
    <div>
      <p style={{color:color}}>{student}</p>
      <button onClick={changeName}>yazini deyis</button>
      <button onClick={changeColor}>rengini deyis</button>
    </div>
  );
};

export default Basket;