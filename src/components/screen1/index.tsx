import * as React from "react";
import styles from "./styles";
import { countryToCode, RamenStyle } from "../../constants";
import * as FuzzySearch from "fuse.js";
import { onlyUnique } from "../../helpers";

const ramenStyle = (style: string) => {
    if (style === "Pack" || style === "Tray") {
        return RamenStyle[style];
    } else {
        return "";
    }
};

const renderList = (ramenList: Ramen[]) => {
    return ramenList.map(ramen => {
        return (
            <div className={styles.listItem}>
                <div className={styles.detailContainer}>
                    <div className={styles.brand}>
                        {`${ramen.brand} | ${ramen.country}`}
                        <img
                            style={{ width: 20, marginLeft: "5px" }}
                            src={`https://www.countryflags.io/${
                                countryToCode[ramen.country]
                            }/shiny/32.png`}
                        />
                    </div>
                    <div className={styles.variety}>{ramen.variety}</div>
                    <div className={styles.packStyle}>{`Style: ${
                        ramen.style === "Pack" || ramen.style === "Tray"
                            ? ramen.style
                            : "--"
                    } ${ramenStyle(ramen.style)} | Rank: ${ramen.ranking?ramen.ranking.rank:""}`}</div>
                </div>
                <div
                    style={{ color: ramen.stars ? "#ffffff" : "#2c2c2c" }}
                    className={styles.rank(ramen.stars)}
                >
                    <i
                        style={{ marginRight: "3px" }}
                        className="fas fa-star"
                    ></i>

                    {ramen.stars === 0 ? "--" : ramen.stars}
                </div>
            </div>
        );
    });
};

const searchFilter = (searcher, term, sort?: boolean) => {
    const result = searcher.search(term);
    if (sort) {
        return result.sort((a, b) => {
            return b.ranking.rank - a.ranking.rank;
        });
    }
    return result;
};

const setYearList = (ramenList: Ramen[]) => {
    const yearList = ramenList.map(
        ramen => ramen.ranking && ramen.ranking.year
    );
    const uniqueYearList = yearList.filter(onlyUnique).filter(e => e);
    return uniqueYearList;
};
const setCountryList = (ramenList: Ramen[]) => {
    const countryList = ramenList.map(ramen => ramen.ranking && ramen.country);
    const uniqueCountryList = countryList.filter(onlyUnique).filter(e => e);
    return uniqueCountryList;
};

export default (props: { ramenList: Ramen[] }) => {
    const [ramenList, setRamenList] = React.useState(props.ramenList);
    const [searchValue, setSearch] = React.useState("");
    const [selectedYear, selectYear] = React.useState(null);
    const [yearList] = React.useState(setYearList(props.ramenList));
    const [selectedCountry, selectCountry] = React.useState(null);
    const [countryList] = React.useState(setCountryList(props.ramenList));

    React.useEffect(() => {}, []);
    const searcher = new FuzzySearch(props.ramenList, {
        threshold:0.1,
        minMatchCharLength:3,
        caseSensitive:false,
        keys: [
            "brand",
            "variety",
            "stars",
            "style",
            "country",
            "stars",
            "ranking.year"
        ]
    });
    return (
        <div className={styles.app}>
            <div className={styles.header}>Ramen</div>
            <div className={styles.searchWrapper}>
                <input
                    onChange={e => {
                        selectYear(null);
                        selectCountry(null);
                        setSearch(e.target.value);
                        setRamenList(e.target.value ? searchFilter(searcher, e.target.value):props.ramenList);
                    }}

                    type={"text"}
                    value={searchValue}
                    className={styles.searchb}
                    placeholder={"Search"}
                />
            </div>
            {!selectedCountry && !searchValue && <div className={styles.yearPopular}>
                <div className={styles.text1}>Choose by year</div>
                <div className={styles.yearScroll}>
                    {yearList.map(year => {
                        return (
                            <div
                                style={{
                                    border:
                                        selectedYear === year
                                            ? "1px solid #420F81"
                                            : "none"
                                }}
                                onClick={() => {
                                    selectCountry(null);
                                    setSearch("");
                                    if (year !== selectedYear) {
                                        selectYear(year);
                                        setRamenList(
                                            searchFilter(searcher, year, true)
                                        );
                                    } else {
                                        selectYear(null);
                                        setRamenList(props.ramenList);
                                    }
                                }}
                                className={styles.year}
                            >
                                {year}
                            </div>
                        );
                    })}
                </div>
            </div>}
           {!selectedYear && !searchValue &&  <div style={{paddingLeft:20,marginTop:selectedCountry?30:0}}>
                <div className={styles.text1}>Choose by country</div>
                <div className={styles.yearScroll}>
                    {countryList.map(country => {
                        return (
                            <div
                                style={{
                                    border:
                                        selectedCountry === country
                                            ? "1px solid #420F81"
                                            : "none"
                                }}
                                onClick={() => {
                                    selectYear(null);
                                    setSearch("");
                                    if (country !== selectedCountry) {
                                        selectCountry(country);
                                        setRamenList(
                                            searchFilter(searcher, country)
                                        );
                                    } else {
                                        selectCountry(null);
                                        setRamenList(props.ramenList);
                                    }
                                }}
                                className={styles.country}
                            >
                                {country}
                            </div>
                        );
                    })}
                </div>
            </div>}
            <div style={{marginTop:searchValue.length?30:0}} className={styles.listContainer}>
                <div className={styles.text1}>
                    {searchValue.length ? "Search Result" : "Popular"}
                </div>
                <div className={styles.list}>{renderList(ramenList)}</div>
            </div>
        </div>
    );
};
