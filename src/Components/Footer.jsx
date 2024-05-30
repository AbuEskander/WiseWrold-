import styles from "./SideBar.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2021 Wise World. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
