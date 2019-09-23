import React from 'react'
import ItemList from './ItemList'

const MyPokemondex = ({ myPokemon, handlerRemoveCard }) =>
    <div className="flexColumn box-list" style={{ marginBottom: "100px" }}>
        {(myPokemon.length > 0) &&
            myPokemon.map((e, i) => {
                return <div key={i} className="flexRow item">
                    <div style={{ width: "80%" }}>
                        <ItemList name={e.name} pic={e.pic} imageUrl={e.imageUrl} hp={e.hp} />
                    </div>
                    <div style={{ width: "20%" }}>
                        <button className="btn-light"
                            onClick={() => handlerRemoveCard(e.id)}>Delete</button>
                    </div>
                </div>
            })
        }
    </div>

export default MyPokemondex