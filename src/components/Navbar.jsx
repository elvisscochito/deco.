import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isActivateLink, setIsActivateLink] = useState('Home');
  /* const [scrolled, setScrolled] = useState(false); */

  const handleActiveLink = (e) => {
    setIsActivateLink(e);
  }

  /* useLayoutEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []) */

  return (
    <nav /* className={scrolled ? styles.navbarScrolled : styles.navbar} */>
      {/* <div className={styles.navbarContainer}> */}
      <ul className={styles.navbarContainer}>
        <li className={styles.navbarItem}>
          <HashLink smooth to="/#home" className={styles.navbarLogoLink} onClick={() => handleActiveLink('Home')}>
            <span className={styles.navbarLogoText}>deco.</span>
          </HashLink>
        </li>
        <li className={styles.navbarItem}>
          <HashLink smooth to="/#features" className={isActivateLink === 'Features' ? styles.navbarLinkActive : styles.navbarLink} onClick={() => handleActiveLink('Features')}>
            Features
          </HashLink>
        </li>
        <li className={styles.navbarItem}>
          <HashLink smooth to="/#benefits" className={isActivateLink === 'Benefits' ? styles.navbarLinkActive : styles.navbarLink} onClick={() => handleActiveLink('Benefits')}>
            Benefits
          </HashLink>
        </li>
        <li className={styles.navbarItem}>
          <HashLink smooth to="/#reviews" className={isActivateLink === 'Reviews' ? styles.navbarLinkActive : styles.navbarLink} onClick={() => handleActiveLink('Reviews')}>
            Reviews
          </HashLink>
        </li>
        <li className={styles.navbarItem}>
          <HashLink smooth to="/#faq" className={isActivateLink === 'FAQ' ? styles.navbarLinkActive : styles.navbarLink} onClick={() => handleActiveLink('FAQ')}>
            FAQ
          </HashLink>
        </li>
        <hr />
        <li className={styles.navbarItem}>
          <NavLink to="/tweets" accessKey='T'>
            Tweets
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink to="/post" accessKey='P'>
            Post
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink to="/whats" accessKey='W'>
            Whats
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink to="/getstarted" accessKey='G'>
            Get Started
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <FontAwesomeIcon icon={faBars} className={styles.navbarIconMenuHamburger} />
        </li>
      </ul>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
