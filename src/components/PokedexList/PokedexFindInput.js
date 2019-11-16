import React from 'react'

const PokedexFindInput = ({
    handleFind
}) => {
    return (
        <>  
            <input type="text" placeholder="Find Pokemon"
                style={{ width: "80%", margin: "15px 55px 0 15px", height: "35px", fontSize: "24px" }}
                onChange={(e) => handleFind(e.target.value)} />
        </>
    )
}
export default PokedexFindInput