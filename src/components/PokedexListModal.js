import React from 'react'
import PokedexList from './PokedexList'

// const iconPlus = require('../assets/icon/add.png')

const PokedexListModal = ({ 
    refModal, 
    refCloesModal 
}) => {
    return <div id="myModal" className="modal" ref={refModal}>
        <div className="modal-content">
            <span className="close" ref={refCloesModal} 
            onClick={() => refModal.current.style.display = "none"}
            >×</span>
            <PokedexList />
        </div>
    </div>
}
export default PokedexListModal