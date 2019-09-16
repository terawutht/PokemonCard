import React from 'react'

const ProgressBar = ({
    percent
}) => {
    return (
        <React.Fragment>
            <div className="progress-bar" >
                <div style={{borderRadius:"15px",backgroundColor:"#f3701a",width:`${(percent)?percent:'0'}%`,height:"100%"}}></div>
            </div>
        </React.Fragment>
    )
}
export default ProgressBar