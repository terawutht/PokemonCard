import React from 'react'
import ProgressBar from './ProgressBar'
import styled from 'styled-components'

const Img = styled.img`
width: 120px;

height: 140px;
position:relative;
`;


const PokedexItemDetail = ({
    name,
    imageUrl,
    hp
}) => {



    return (
        <React.Fragment>
            <div className="flexRow" >
                <div style={{ width: "15opx", position: "relative" }}>
                    {(imageUrl) &&
                        <Img src={imageUrl} />
                    }
                </div>
                <div style={{ width: "80%" }}>
                    <h2>{name}</h2>
                    <div className="flexRow">HP  <ProgressBar percent={hp} /></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PokedexItemDetail