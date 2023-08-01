import styles from "./productCard.module.css"
import Image from "next/image";
import Button from "../button/button";
import ShoppingCarVector from "../svgComponents/shoppingCarVector";
import DogPawIcon from "../svgComponents/dogPawIcon";

const ProductCard = (props) => {
  const image = props.image;
  const title = props.title;
  const rating = props.rating;
  const price = props.price;

  return (
    <>
    <div className={styles["product-card-container"]}>

      <Image
          src = {image}
          alt="Product icon"
          className={styles["product-card-icon"]}
          />

      <div className={styles["product-card-information"]}>
          <h5 className={styles["product-card-title"]}>
          {title}
          </h5>

          <div className={styles["product-card-rating"]}>
          {/* Se renderiza los DogPawIcon con isFill en true */}
            {Array.from({ length: rating }).map((_, index) => (
              <DogPawIcon isFill={true} />
            ))}

            {/* Se renderiza los DogPawIcon con isFill en false */}
            {Array.from({ length: 5 - rating }).map((_, index) => (
              <DogPawIcon isFill={false} />
            ))}

          </div>

          <h5 className={styles["product-card-price"]}>
            {price}
          </h5>

      </div>
      <div className={styles["product-card-button"]}>
      <Button
        icon={ShoppingCarVector} // Pasa el componente directamente aquí
        title="Agregar"
        />
      </div>


    </div>
    </>
  )
}

export default ProductCard;
