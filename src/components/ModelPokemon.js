import React from 'react'
import PokemonList from './PokemonList'
const iconPlus = require('../assets/icon/add.png')

const ModelPokemon = ({ refModel, refCloesModel, handlerCloesModel }) =>
    <div id="myModal" className="modal" ref={refModel}>
        <div className="modal-content">
            <span className="close" ref={refCloesModel} onClick={handlerCloesModel}>×</span>
            <PokemonList />
        </div>
    </div>

export default ModelPokemon