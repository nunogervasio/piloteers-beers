import React, { Component } from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
import { infoNotAvailable } from "../../utils/utils";
import CardHeader from "../cardHeader/cardHeader";
import CardContentItem from "../cardContentItem/cardContentItem";
import Colors from "../../variables";

class CardMain extends Component {
  render() {
    const styles = {
      item: {
        padding: "15px",
        margin: "5px",
        width: "250px",
        height: "175px",
        border: "2px solid #111830",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ":hover": {
          backgroundColor: "rgb(222, 222, 222)"
        },
        "@media (min-width: 576px)": {
          width: "350px"
        }
        // color: Colors.red
      },
      content: {
        display: "flex",
        justifyContent: "space-around"
      },
      a: {
        color: "black",
        textDecoration: "none"
      }
    };
    const { data } = this.props;
    const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("IBU");

    return (
      <Link to={`/beer/${data.id}`} style={styles.a}>
        <div style={styles.item}>
          <CardHeader header={data.name} />
          <div style={styles.content}>
            <CardContentItem value={data.abv} title="ABV" />
            <CardContentItem value={beerIBU} title="IBU" />
          </div>
        </div>
      </Link>
    );
  }
}
CardMain = Radium(CardMain);
export default CardMain;
