import { Link } from "react-router-dom";
import { useContext } from "react";
import "./CartElements.css";
import { DataContext } from "../../Context/DataContext";

const CartElements = () => {
  const { cart, setCart } = useContext(DataContext);

  return cart.map((coff) => {
    let sumar = () => {
      console.log("aqui");
      coff.quantity++;
      setCart([...cart]);
      console.log(coff);
    };

    let restar = () => {
      if (coff.quantity > 1) {
        coff.quantity--;
        setCart([...cart]);
      }
    };
    let eliminar = () => {
      console.log("borrame");
      eliminarProducto(coff._id);
    };

    const eliminarProducto = (id) => {
      if (window.confirm("Quieres eliminar el producto?"))
        cart.map((coff, index) => {
          if (coff._id === id) {
            coff.quantity = 1;
            cart.splice(index, 1);
          }
          setCart([...cart]);
        });
    };

    return (
      <div className="modal-container row">
        <article className="items col" key={coff._id}>
          <img src={coff.img_url} />
          <p className="bottom3">{coff.brand}</p>
          <p>Precio: {coff.price.toFixed(2)}€</p>
          <p className="restar" onClick={() => restar()}>
            -
          </p>
          <p>Cantidad: {coff.quantity} Und(s)</p>
          <p className="sumar" onClick={() => sumar()}>
            +
          </p>
          <p> Subtotal: {(coff.price * coff.quantity).toFixed(2)}€</p>
          <p className="delete-product" onClick={() => eliminar()}>
            ❌
          </p>
        </article>
      </div>
    );
  });
};
export default CartElements;
