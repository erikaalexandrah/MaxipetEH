import styles from "./brandPanel.module.css"
import Title from "../../title/title"
import Subtitle from "../../subtitle/subtitle"
import { BrandInfo } from "./brandInfo"
import Image from "next/image"
const BrandPanel = () => {

  return (
    <>
    <div className={styles["brand-panel-container"]}>
      <div className={styles["brand-panel-frame1"]}>
        <Subtitle subtitle = "Lorem ipsum dolor sit amet. " />
        <Title title = "Trabajamos con las mejores marcas"/>

      </div>

      <div className={styles["brand-panel-frame2"]}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.
        </p>
        <div className={styles["brand-panel-frame2-diplayer"]}>
          {BrandInfo.map((item, index) => (
        <Image
          src = {item.image}
          alt="Dog Food"
          />
        ))}
        </div>

      </div>

    </div>
    </>
  )
}

export default BrandPanel;
