import styles from "./footer.module.css"
import AvilaIcon from "../svgComponents/avilaIcon";
import TreeIcon from "../svgComponents/treeIcon";
import DogHouse from "../svgComponents/dogHouse";
import InstagramLogo from "../svgComponents/instagramLogo";
import TwitterLogo from "../svgComponents/twitterLogo";
import FacebookLogo from "../svgComponents/facebookLogo";
import Link from 'next/link';


const Footer = () => {
  return (
    <>
    <div className={styles["footer-container"]} >

      <div className={styles["footer-frame1"]}>

        <div className={styles["footer-about-us"]}>
          <h3 className={styles["footer-title"]}>
            Sobre nosotros
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.
          </p>

        </div>
        <div className={styles["footer-columns"]}>
          <h3 className={styles["footer-title"]}>
            Mi cuenta
          </h3>
           <Link href ='my-information'> Información personal </Link>
           <Link href ='my-directions'> Direcciones </Link>
           <Link href ='my-pets'> Mascotas </Link>
           <Link href ='my-orders'> Órdenes </Link>
           <Link href ='my-agenda'> Agenda </Link>
        </div>

        <div className={styles["footer-columns"]}>
          <h3 className={styles["footer-title"]}>
            Información
          </h3>
          <Link href ='my-information'> Formulario de contacto </Link>
           <Link href ='my-directions'> Preguntas frecuentes </Link>
           <Link href ='my-pets'> Términos y condiciones </Link>
           <Link href ='my-orders'> Política de privacidad </Link>
        </div>
        <div className={styles["footer-columns"]}>
          <h3 className={styles["footer-title"]}>
            Atención al Cliente
          </h3>
            <p> Bello Monte, calle XXXX, local 1 </p>
            <p> (0212) 575 54 12 </p>
            <p> soporte@maxipet.com </p>
            <p> Lunes a Viernes </p>
            <p> 9:00 a.m. - 5:00 p.m. </p>
            <div className={styles["footer-social-medias"]}>
              <InstagramLogo color = "#867D77"/>
              <TwitterLogo color = "#867D77"/>
              <FacebookLogo color = "#867D77"/>

            </div>

        </div>

      </div>
      <div className={styles["footer-frame2"]}>
        <div style={{ marginTop:20 }}>
          <DogHouse />
          </div>
        <TreeIcon />
      </div>
      <div className={styles["footer-frame3"]}>
        <p>
          Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado por Avila Tek
        </p>
        <AvilaIcon />


      </div>

    </div>
    </>
  )
}

export default Footer;
