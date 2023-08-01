import styles from "./servicesPanel.module.css"
import Subtitle from "../../subtitle/subtitle";
import { ServicesInfo } from "./servicesInfo";
import ServiceCard from "./serviceCard";
import Title from "../../title/title";
const ServicesPanel = () => {

  return (
    <>
    <div className={styles["services-panel-container"]}>

      <div className={styles["services-panel-frame1"]}>
        <Subtitle subtitle = "Lorem ipsum dolor sit amet. "/>
        <Title title = "Nuestros servicios"/>
      </div>

      <div className={styles["services-panel-frame2"]}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.
        </p>
      </div>
      <div className={styles["services-panel-frame3"]}>
        {ServicesInfo.map((item, index) => (
          <ServiceCard image = {item.image} title={item.title} description ={item.description}/>
        ))}
      </div>

    </div>
    </>
  )
}

export default ServicesPanel;
