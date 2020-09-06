import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/login"
        className={styles.NavigationLink + ' ' + styles.navLink}
        activeClassName={styles.NavigationLinkActive}
      >
        LogIn
      </NavLink>
      <br />
      <NavLink
        to="/register"
        className={styles.NavigationLink + ' ' + styles.navLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Navigation;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from './Navigation.module.css';
// import routes from '../../routes';

// const Navigation = () => {
//   return (
//     <div className={styles.nav}>
//       <NavLink
//         exact
//         to={routes.logIn}
//         className={styles.NavigationLink + ' ' + styles.navLink}
//         activeClassName={styles.NavigationLinkActive}
//       >
//         LogIn
//       </NavLink>
//       <br />
//       <NavLink
//         to={routes.register}
//         className={styles.NavigationLink + ' ' + styles.navLink}
//         activeClassName={styles.NavigationLinkActive}
//       >
//         Register
//       </NavLink>
//       <NavLink
//         to={routes.contacts}
//         className={styles.NavigationLink + ' ' + styles.navLink}
//         activeClassName={styles.NavigationLinkActive}
//       >
//         Contacts
//       </NavLink>
//     </div>
//   );
// };

// export default Navigation;
