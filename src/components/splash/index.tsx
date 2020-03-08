import * as React from "react";
import styles from "./styles";

export default (props) => {
    return (
        <div className={styles.splashContainer}>
            <div className={styles.splashImgContainer}>
                <img
                    className={styles.splashImg}
                    src={
                        "https://i.ibb.co/xsQHdYF/Screenshot-2020-03-06-at-5-03-17-PM.png"
                    }
                    alt=""
                />
            </div>
            <div className={styles.loaderContainer}>
                <div style={{width:props.loaded?"100%":"0%"}} className={styles.loader}></div>
            </div>
            <div className={styles.appName}>
                Ramen
            </div>
        </div>
    );
};
