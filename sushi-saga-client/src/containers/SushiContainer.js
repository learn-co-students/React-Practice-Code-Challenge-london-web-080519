import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiList.map(sushi => (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            handleClickPlate={props.handleClickPlate}
          />
        ))}
        <MoreButton handleClickMoreSushi={props.handleClickMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
