import React from "react";
import { infoNotAvailable } from "../../utils/utils";

const CardMain = ({ data }) => {
  // const name = user && user.personalInfo ? user.personalInfo.name : null;
  //   const beerIBU = data && data.style ? data.style.ibuMax : null;

  // const beerIBU = data && data.ibu ? data.ibu : null;
  const beerIBU = data && data.ibu ? data.ibu : infoNotAvailable("ibu");
  return (
    <div>
      Name: {data.name}
      ABV: {data.abv}
      IBU: {beerIBU}
    </div>
  );
};

export default CardMain;
