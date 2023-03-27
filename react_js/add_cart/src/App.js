import Cartlist from "./Components/Cartlist";
import ItemShow from "./Components/ItemShow";
import NavBar from "./Components/NavBar";
import styles from "./App.module.css";
import ItemAdded from "./Components/ItemAdded";
import { useState, useEffect } from "react";

function App() {
  const cartFromLocal = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocal);
  const [show, setShow] = useState(false);
  const [notifcationArr, setNotifcationArr] = useState([]);
  const onClose = () => {
    setShow(false);
    setNotifcationArr([]);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (item) => {
    setCart((cart) => {
      const index = cart.findIndex((cartItem) => item.id === cartItem.id);
      if (index !== -1) {
        const newItem = { ...cart[index], quantity: cart[index].quantity + 1 };
        return cart.map((item, i) => (item.id === newItem.id ? newItem : item));
      } else {
        return [...cart, item];
      }
    });
    setNotifcationArr([...notifcationArr, item]);
    setShow(true);
  };

  return (
    <div className={styles.App}>
      <div className={styles.notifcation}>
        {notifcationArr.map((val) => {
          return (
            <ItemAdded item={val} show={show} onClose={onClose} cart={cart} />
          );
        })}
      </div>
      <NavBar></NavBar>
      <div className={styles.itemContainer}>
        <ItemShow addCart={addCart}></ItemShow>
      </div>
      <Cartlist className={styles.Cartlist} cart={cart}></Cartlist>
    </div>
  );
}

export default App;
