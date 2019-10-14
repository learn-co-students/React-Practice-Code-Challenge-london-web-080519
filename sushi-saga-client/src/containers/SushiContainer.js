import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} balance={props.balance}sushisEaten={props.sushisEaten} containerSushiClick={props.appSushiClick}/>)}
          
        <MoreButton onMoreButtonClick={props.onMoreButtonClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer