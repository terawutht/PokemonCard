import React from 'react'
import ProgressBar from './ProgressBar'

const ItemList = ({
    name,
    imageUrl,
    hp
}) => {
    
    return (
        <React.Fragment>
            <div className="flexRow" >
                <div style={{ width: "20%" }}><img src={imageUrl} className="image-pokemon" /></div>
                <div style={{ width: "80%" }}>
                    <h2>{name}</h2>
                    <div className="flexRow">HP  <ProgressBar percent={hp}/></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ItemList