import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!         
          */
         props.sushis.map(sushi => <Sushi {...sushi} key={sushi.id} eatenSushi={props.eatenSushi} handleSushiClick={props.handleSushiClick}/>)
        
        }
        <MoreButton updatePageNumber = {props.updatePageNumber} currentPageNumber={props.currentPageNumber}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
