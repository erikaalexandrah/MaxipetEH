import styles from "./popularProducts.module.css"
import Subtitle from "../../subtitle/subtitle";
import Title from "../../title/title";
import ProductCard from "../../productCard/productCard";
import { PopularInfo } from "./popularInfo";
import dogPlaying from "../../../public/dog-playing.png"
import Image from "next/image";

const PopularProducts = () => {

  return (
    <>
    <div className={styles["popular-products-container"]}>

      <div className={styles["popular-products-frame1"]}>
        <Subtitle subtitle= "Lorem ipsum dolor sit amet. "/>
        <Title title = "Productos populares"/>

      </div>

      <div className={styles["popular-products-frame2"]}>
        {PopularInfo.map((item, index) => (
           <ProductCard image={item.image} title={item.title} rating = {item.rating} price ={item.price}/>
            ))}
      </div>

      <div className={styles["popular-products-frame3"]}>
         <Image
          src = {dogPlaying}
          alt="Dog Food"
          />
      </div>

    </div>
    </>
  )
}

export default PopularProducts;

