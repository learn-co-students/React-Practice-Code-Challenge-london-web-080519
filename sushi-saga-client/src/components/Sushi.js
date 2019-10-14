import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" 
             onClick={props.handleConsumption}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            props.eaten ?
              null
            :
              <img src={props.img_url} alt={`${props.name} pic`} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {props.name} - ${props.price}
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi