import styles from './navbar.module.css';
import Image from 'next/image'
import DropdownMenu from '../ladingPagePanels/panelCategories/dropdownMenu/dropdownMenu';
import {DropdownMenuData} from './dropdownMenuData';
import maxipet_logo from '../../public/maxipet_logo.png';
import FacebookLogo from "../svgComponents/facebookLogo";
import TwitterLogo from "../svgComponents/twitterLogo";
import InstagramLogo from "../svgComponents/instagramLogo";
import LocationIcon from "../svgComponents/locationIcon";
import PetIcon from "../svgComponents/petIcon";
import UserIcon from "../svgComponents/userIcon";
import ShoppingCarIcon from "../svgComponents/shoppingCarIcon";
import SearchIcon from "../svgComponents/searchIcon";
import Link from 'next/link';

const Navbar = () => {

  return (
    <>
      <div className={styles["navbar-container"]}>

        <div className={styles["navbar-frame1"]}>
            <div className={styles["navbar-frame1-icons1"]}>
            <LocationIcon color="#F8F5F3" />
            </div>

            <div className={styles["navbar-frame1-dropdown"]}>
              <DropdownMenu
              title="Bello Monte"
              items={DropdownMenuData}
              backgroundColor="" textColor="white"
              />
            </div>

            <div className={styles["navbar-frame1-icons"]}>
            <Link href="https://www.instagram.com">
              <InstagramLogo color="#F8F5F3" />
            </Link>
            <Link href="https://www.twitter.com">
              <TwitterLogo color="#F8F5F3" />
            </Link>
            <Link href="https://www.facebook.com">
              <FacebookLogo color="#F8F5F3" />
            </Link>
            </div>
          </div>

        <div className={styles["navbar-frame2"]}>

          <div className={styles["navbar-frame2-logo"]}>
            <Image
            src = {maxipet_logo}
            alt="Maxipet Logo"
            className={styles["maxipet-logo"]}
            />
          </div>

          <div className={styles["navbar-frame2-search"]}>
          <input
          type="text"
          placeholder="Buscador"
          className={styles["search-input"]}
          />

          <button className={styles["search-icon"]}>
            <SearchIcon/>
          </button>

          </div>

          <div className={styles["navbar-frame2-icons"]}>
          <LocationIcon color = "#333333"/>
          <PetIcon />
          <UserIcon />
          <ShoppingCarIcon />
          </div>

        </div>

        <div className={styles["navbar-frame3"]}>
          <Link href ='/'> Inicio </Link>
          <Link href ='shop-by-brand'> Comprar por marca </Link>
          <Link href ='shop-by-pet'> Comprar por mascota </Link>
          <Link href ='our-services'> Nuestros servicios </Link>
          <Link href ='promotions'> Promociones </Link>
          <Link href ='about-us'> Nosotros </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
