import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';
import MoreMoney from '../components/MoreMoney';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return <Sushi key={sushi.id} {...sushi} 
          handleConsumption={() => props.handleConsumption(sushi)}
          eaten={props.eatenSushisIds.includes(sushi.id) ? true : false} 
          />
        })}
        <MoreButton handleMoreSushi={props.handleMoreSushi}/>
        <MoreMoney addMoney={props.addMoney}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer