import React from 'react'
import PokedexItemDetail from '../PokedexItemDetail'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.div`
    background-color:lightblue;
    height: 160px;
    padding: 15px 0 15px 5px;
    margin: 10px   ;
    position:  relative
`;

const styles ={
   btn :{
    padding: "0",
    border: "none",
    background: "none",
    color:"red",
    fontWeight: "600",
    fontSize:"25px"

   } 
}


const PokedexShowList = ({
    pokedexList,
    addPokedexCard
}) => {
    return (
        <div className="flexColumn box-list">
            {pokedexList.length > 0 &&
                pokedexList.map((e, i) => {
                    return <Item key={i} className="flexRow">
                        <div style={{ width: "80%", position: "relative" }}>
                            <PokedexItemDetail name={e.name} pic={e.pic} imageUrl={e.imageUrl} hp={e.hp} />
                        </div>
                        <div style={{ width: "20%", padding: "15px 15px" }}>
                            <button style={styles.btn} onClick={() =>
                                addPokedexCard(
                                    {
                                        id: e.id,
                                        name: e.name,
                                        imageUrl: e.imageUrl,
                                        hp: e.hp
                                    })
                            }>add</button>
                        </div>
                    </Item>
                })
            }
        </div>
    )
}

// PokedexShowList.propTypes = {
//     myPokedexData: propTypes.array,
//     addPokedexCard: propTypes.func
// }



export default PokedexShowList