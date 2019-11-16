import React from 'react'
const iconPlus = require('../assets/icon/add.png')

const OpenModalButton = ({
    refModal
}) => {
   
    return <div className="footer">
        <div className="div-circle"
            onClick={() => refModal.current.style.display = "block"}
        >
            <img src={iconPlus}
                style={{ width: "70px", height: "70px", color: "#FFF", marginTop: "36px", marginLeft: "36px" }} />
        </div>
    </div>
}
export default OpenModalButton