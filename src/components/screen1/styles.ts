import { style } from "typestyle";

const app = style({
    backgroundColor: "#f5f6f7",
    width: "100%"
});

const header = style({
    width: "100%",
    height: 100,
    backgroundColor: "#FFCB5F",
    display: "flex",
    paddingLeft: 20,
    fontSize: "36px",
    fontFamily: "Monoton, cursive",
    color: "white",
    boxSizing: "border-box",
    paddingTop: 15
});

const searchWrapper = style({
    width: "70%",
    borderRadius: "3px",
    padding: "4px 55px 4px 15px",
    background: "#fff",
    height: 20,
    transition: "all 200ms ease-in-out",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    boxShadow: "0px 1px 10px -3px rgba(1,1,1,0.5)",
    left: "50%"
});

const searchb = style({
    outline: "none",
    border:"none"
});

const listContainer = style({
    width: "90%",
    paddingLeft: 20
});

const text1 = style({
    fontSize: "20px",
    color: "#420F81",
    fontFamily: "Roboto",
    fontWeight: 700
});

const list = style({
    width: "100%",
    marginTop: "20px",
    fontFamily: "Roboto"
});

const listItem = style({
    display: "flex",
    backgroundColor: "#E0E5EC",
    position: "relative",
    marginBottom: "20px",
    width: "100%",
    height: 85,
    borderRadius: "5px",
    boxShadow:
        "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
    alignItems: "center"
});

const brand = style({
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    color: "#2c2c2c",
    marginBottom: 3
});
const variety = style({
    fontSize: "12px",
    fontWeight: 400,
    color: "#827878",
    marginBottom: 5
});

const packStyle = style({
    fontSize: "12px",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    color: "#2c2c2c"
});

const imgContainer = style({
    height: 64,
    width: 64,
    backgroundColor: "red"
});

const rank = (rank: number) =>
    style({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20px",
        width: "38px",
        position: "absolute",
        borderRadius: 3,
        right: 5,
        top: 5,
        fontSize: "10px",
        backgroundColor:
            rank > 3 ? "#48c479" : rank === 0 ? "transparent" : "#db7c38"
    });

const detailContainer = style({
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10
});

const yearPopular = style({
    marginTop: 30,
    paddingLeft: 20
});

const country = style({
    position: "relative",
    fontFamily: "Roboto",
    display: "flex",
    fontSize: "12px",
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E5EC",
    flex:"0 0 auto",
    padding: 5,
    width: "100px",
    height: "20px",
    marginRight: "10px",
    borderRadius: "10px",
    boxShadow:
        "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)"
});

const year = style({
    position: "relative",
flex:"0 0 auto",
    fontFamily: "Roboto",
    display: "flex",
    fontSize: "12px",
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E5EC",

    padding: 5,
    width: "50px",
    height: "20px",
    marginRight: "10px",
    borderRadius: "10px",
    boxShadow:
        "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)"
});

const yearScroll = style({
    overflow: "scroll",
    marginTop: "20px",
    display: "inline-flex",
    paddingBottom: "20px",
    width:"100%"
});
export default {
    year,
    app,
    yearScroll,
    yearPopular,
    text1,
    list,
    header,
    listContainer,
    searchWrapper,
    searchb,
    listItem,
    brand,
    variety,
    rank,
    country,
    imgContainer,
    packStyle,
    detailContainer
};
