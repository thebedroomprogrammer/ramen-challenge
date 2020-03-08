import * as React from "react";
import Splash from "../splash";
import styles from "./styles";
import { getRamen } from "../../helpers";
import Screen from "../screen1";

export default () => {
    const [loaded, setLoadedState] = React.useState(false);
    const [fakeloaded, setFakeLoader] = React.useState(false);
    const [ramenList, setRamenList] = React.useState([]);
    React.useEffect(() => {
        setFakeLoader(true);
        (async () => {
            setTimeout(() => {
                setLoadedState(true);
            }, 2000);
            const ramenList = await getRamen();
            setRamenList(ramenList);
        })();
    }, []);

    return (
        <div className={styles.appContainer}>
            {loaded && ramenList?<Screen ramenList={ramenList} /> : <Splash loaded={fakeloaded} />}
        </div>
    );
};
