"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        <strong>☰</strong>
      </button>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <h2>Victory Lap</h2>
        <ul className={styles.navList}>
          <li>
            <Link href={{pathname: "/protected/dashboard"}}>Home</Link> {/* Link to Home page */}
          </li>
          <li>
            <Link href={{pathname: "/protected/classes"}}>Classes</Link> {/* Link to Classes page */}
          </li>
          <li>
            <Link href={{pathname: "/protected/profile"}}>Profile</Link> {/* Link to Profile page */}
          </li>
          <li>
            <Link href={{pathname: "/protected"}}>Log Out</Link> {/* Link to Profile page */}
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;