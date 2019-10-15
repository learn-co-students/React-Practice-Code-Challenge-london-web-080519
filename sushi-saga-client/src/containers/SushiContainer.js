import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi, i) => <Sushi key={sushi.id} sushi={sushi} plates={props.plates} handleEaten={()=>props.handleEaten(sushi)} />)}
        <MoreButton getMoreSushi={props.increaseIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer