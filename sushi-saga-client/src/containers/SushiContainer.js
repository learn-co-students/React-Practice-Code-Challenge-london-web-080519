import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
	return (
		<Fragment>
			<div className="belt">
				{/* 
             Render Sushi components here!
          */}
				{props.sushiList.map(sushi => (
					<Sushi
						sushi={sushi}
						eatSushi={() => props.eatSushi(sushi)}
						key={sushi.id}
					/>
				))}
				<MoreButton moreSushi={props.moreSushi} />
			</div>
		</Fragment>
	);
};

export default SushiContainer;
