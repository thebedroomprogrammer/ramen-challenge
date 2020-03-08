import { style } from "typestyle";

const splashContainer = style({
    height: "100vh",
    backgroundColor: "#DDBC90",
    position: "relative"
});

const splashImgContainer = style({
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "38%",
    left: "54%"
});

const splashImg = style({ width: "200px" });

const loaderContainer = style({
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "55%",
    left: "50%",
    width: "50%",
    backgroundColor: "white",
    borderRadius: "5px",
    height: 5,
    boxShadow: "0px 0px 1px 1px rgba(1,1,1,0.5) inset"
});

const loader = style({
    height: 5,
    width: 0,
    transition: "width 2s",
    backgroundColor: "#ec9e35",
    borderRadius: "5px"
});

const appName = style({
    fontFamily: "Monoton, cursive",
    fontSize: "32px",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "62%",
    color: "white",
    textAlign: "center",
    left: "50%",
    width: "50%"
});

export default {
    loader,
    appName,
    loaderContainer,
    splashContainer,
    splashImgContainer,
    splashImg
};
