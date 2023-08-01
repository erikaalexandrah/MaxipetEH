import styles from "./subtitle.module.css"
const Subtitle = (props) => {
  const subtitle = props.subtitle
  return (
    <>
      <h2 className={styles["subtitle"]}>
        {subtitle}
      </h2>
    </>
  )
}

export default Subtitle
