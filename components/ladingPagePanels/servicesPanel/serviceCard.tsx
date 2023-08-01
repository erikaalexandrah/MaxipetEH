import styles from "./serviceCard.module.css"
import Image from "next/image"
const ServiceCard = (props) => {
  const image = props.image;
  const title = props.title;
  const description = props.description;
  return (
    <>
    <div className={styles ["service-card-container"]}>
      <Image
          src = {image}
          alt="Product icon"
          className={styles["service-card-icon"]}
          />
      <h5 className={styles ["service-card-title"]}>
        {title}
      </h5>

      <p className={styles ["service-card-description"]}>
        {description}
      </p>

    </div>
    </>
  )
}

export default ServiceCard
