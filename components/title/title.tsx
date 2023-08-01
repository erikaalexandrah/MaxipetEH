import styles from "./title.module.css"

const Title = (props) => {
  const title = props.title;
  return (
    <>
    <h1 className={styles["title"]}>
    {title}
    </h1>

    </>

  )
}

export default Title;
