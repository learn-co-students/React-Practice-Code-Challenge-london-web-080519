import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'




const SushiContainer = (props) => {




  const mapSushi = () => {

       // console.log(`sushi map ${props.sushiData}`)
        
  

        return  props.sushiData.map((sushi, index) => {
              if (index >= props.from && index <= props.to) {
                return <Sushi name={sushi.name} keyId={sushi.id} img={sushi.img_url} price={sushi.price} finishPlate={props.plateCount}/>
              }else {
                return null
              }
          })  
        }        
 
  return (
    <Fragment>
      <div className="belt">
           
        
         {mapSushi()}
         

        <div><MoreButton updateDisplay={props.updateDisplay}/></div>

      </div>
    </Fragment>
  )

}

export default SushiContainer