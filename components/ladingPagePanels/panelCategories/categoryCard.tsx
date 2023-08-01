import DogPaw from "../../svgComponents/dogPaw";
import styles from "./categoryCard.module.css"
import Image from 'next/image'

const CategoryCard = (props) => {
  const image = props.image;
  const title = props.title;

  return (
    <>
    <div className={styles["category-card-container"]}>
      <DogPaw />
      <Image
          src = {image}
          alt="Maxipet icon"
          className={styles["maxipet-icon"]}
          />
      <h5 className={styles["category-card-title"]}>
        {title}
      </h5>
    </div>
    </>

  )
}

export default CategoryCard;
