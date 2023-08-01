import styles from "./featuredProducts.module.css"
import catIcon from "../../../public/featured-product-cat-vector.png"
import Image from "next/image"
import Title from "../../title/title"
import Subtitle from "../../subtitle/subtitle"
import { FeaturedInfo } from "./featuredInfo"
import ProductCard from "../../productCard/productCard"
import dogEating from "../../../public/dog-eating.png"
import dogFood from "../../../public/dog-food.png"

const FeaturedProducts = () => {

  return (
    <>
    <div className={styles["featured-products-container"]}>

      <div className ={styles["featured-products-frame1"]}>
        <Subtitle subtitle ="Lorem ipsum dolor sit amet." />
        <Title  title = "Productos destacados"/>
      </div>

      <div className={styles["featured-products-frame2"]}>

        <div className={styles["featured-products-frame1-vector"]}>
           <Image
          src = {catIcon}
          alt="Cat icon"
          />
        </div>

        <div className={styles["featured-products-frame1-cards-displayer"]}>
           {FeaturedInfo.map((item, index) => (
           <ProductCard image={item.image} title={item.title} rating = {item.rating} price ={item.price}/>
            ))}
        </div>

      </div>

      <div className={styles["featured-products-frame3"]}>
        <Image
          src = {dogEating}
          alt="Dog Eating"
          />

          <Image
          src = {dogFood}
          alt="Dog Food"
          className={styles["featured-products-frame3-image2"]}
          />
      </div>

    </div>
    </>
  )
}

export default FeaturedProducts;
