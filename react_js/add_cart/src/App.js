import Cartlist from "./Components/Cartlist";
import ItemShow from "./Components/ItemShow";
import NavBar from "./Components/NavBar";
import Notifcation from "./Components/Notifcation";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
const cartFromLocal = JSON.parse(localStorage.getItem("cart") || "[]");
function App() {
  const [cart, setCart] = useState(cartFromLocal);
  const [notifcationArr, setNotifcationArr] = useState([]);

  const onClose = (index) => {
    setNotifcationArr((notifcationArr) => {
      return notifcationArr.filter((val, i) => i !== index);
    });
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
    setNotifcationArr([
      ...notifcationArr,
      { ...item, timeStamp: new Date().toISOString() },
    ]);
  };

  return (
    <div className={styles.App}>
      <div className={styles.notifcation}>
        {!!notifcationArr &&
          notifcationArr.map((val, index) => {
            return (
              <Notifcation
                onClose={onClose}
                item={val}
                key={val.timeStamp}
                index={index}
              />
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
