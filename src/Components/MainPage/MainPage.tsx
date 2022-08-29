import React from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import styles from "./MainPage.module.scss";

const cx = classNames.bind(styles);

export default function MainPage(){
  return(
    <div>
      <h1>Hi i'm Main</h1>
      <div className={styles.selectPage}>
        <Link to="/tech">tech</Link> 
        | 
        <Link to="/new">new</Link>
      </div>
    </div>
  )
}