import React from 'react'
import ItemList from '../../components/ItemList'

const ShowList = ({
    pokemonList,
    onAddCard
}) => {

    // const item =

    return (

        <div className="flexColumn box-list">
            {pokemonList.length > 0 &&
                pokemonList.map((e, i) => {
                    return <div key={i} className="flexRow item">
                        <div style={{ width: "80%" }}>
                            <ItemList name={e.name} pic={e.pic} imageUrl={e.imageUrl} hp={e.hp}/>
                        </div>
                        <div style={{ width: "20%" }}>
                            <button className="btn-light" onClick={() =>
                                onAddCard(
                                    {
                                        id: e.id,
                                        name: e.name,
                                        imageUrl: e.imageUrl,
                                        hp : e.hp
                                    })
                            }>add</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default ShowList