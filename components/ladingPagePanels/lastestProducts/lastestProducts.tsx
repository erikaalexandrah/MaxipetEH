 import styles from "./latestProducts.module.css"
 import Image from "next/image"
 import Title from "../../title/title"
 import Subtitle from "../../subtitle/subtitle"
import { LatestInfo } from "./latestInfo"
 import ProductCard from "../../productCard/productCard"
 import catIcon from "../../../public/featured-product-cat-vector.png"


const LatestProducts = () => {

  return (
    <>
    <div className={styles["latest-products-container"]}>
      <div className={styles["latest-products-frame1"]}>
        <Subtitle subtitle ="Lorem ipsum dolor sit amet." />
        <Title  title = "Últimos productos"/>
      </div>
      <div className={styles["latest-products-frame2"]}>
        <div className={styles["latest-products-frame2-cards-displayer"]}>
        {LatestInfo.map((item, index) => (
           <ProductCard image={item.image} title={item.title} rating = {item.rating} price= {item.price}/>
        ))}
        </div>
        <div className={styles["latest-products-frame2-vector"]} >
        <Image
          src = {catIcon}
          alt="Cat icon"
          />
        </div>
        </div>
      </div>
    </>
  )
}

export default LatestProducts;


