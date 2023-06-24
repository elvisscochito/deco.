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
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarMenuItem}>
            <HashLink smooth to="/#home" className={styles.navbarLogoLink} onClick={() => handleActiveLink('Home')}>
              <span className={styles.navbarLogoText}>deco.</span>
            </HashLink>
          </li>
          <li className={styles.navbarMenuItem}>
            <HashLink smooth to="/#features" className={isActivateLink === 'Features' ? styles.navbarMenuLinkActive : styles.navbarMenuLink} onClick={() => handleActiveLink('Features')}>
              Features
            </HashLink>
          </li>
          <li className={styles.navbarMenuItem}>
            <HashLink smooth to="/#benefits" className={isActivateLink === 'Benefits' ? styles.navbarMenuLinkActive : styles.navbarMenuLink} onClick={() => handleActiveLink('Benefits')}>
              Benefits
            </HashLink>
          </li>
          <li className={styles.navbarMenuItem}>
            <HashLink smooth to="/#reviews" className={isActivateLink === 'Reviews' ? styles.navbarMenuLinkActive : styles.navbarMenuLink} onClick={() => handleActiveLink('Reviews')}>
              Reviews
            </HashLink>
          </li>
          <li className={styles.navbarMenuItem}>
            <HashLink smooth to="/#faq" className={isActivateLink === 'FAQ' ? styles.navbarMenuLinkActive : styles.navbarMenuLink} onClick={() => handleActiveLink('FAQ')}>
              FAQ
            </HashLink>
          </li>
          <li className={styles.navbarMenuItem}>
            <NavLink to="/tweets" accessKey='T'>
              Tweets
            </NavLink>
          </li>
          <li className={styles.navbarMenuItem}>
            <NavLink to="/post" accessKey='P'>
              Post
            </NavLink>
          </li>
          <li className={styles.navbarMenuItem}>
            <NavLink to="/whats" accessKey='W'>
              Whats
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
