import React, { Fragment } from 'react'


const Sushi = (props) => {




  return (
    <div className="sushi">
      <div className="plate" 
           onClick={event => props.finishPlate(props.price, props.keyId)}>
        
        { 
          props.img !== null ? <img src={`${props.img}`} width="100%" /> : null
        } 
        
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi