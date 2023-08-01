import styles from './panelCategories.module.css';
import CategoryCard from './categoryCard';
import { CategoryInfo } from './categoriesInfo';
import Subtitle from '../../subtitle/subtitle';
import Title from '../../title/title';


const PanelCategories = () => {

  return (
    <>
    <div className={styles["panel-categories-container"]}>
      <div className ={styles["panel-categories-frame1"]}>
        <Subtitle subtitle ="Lorem ipsum dolor sit amet." />
        <Title  title = "Una gran variedad de categorías"/>
      </div>

      <div className ={styles["panel-categories-frame2"]}>
        {CategoryInfo.map((item, index) => (
        <CategoryCard key={index} image={item.image} title={item.title}/>
      ))}
      </div>
    </div>
    </>
  )
}

  export default PanelCategories;
