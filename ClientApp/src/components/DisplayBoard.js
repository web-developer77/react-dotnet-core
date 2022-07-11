import React from 'react'

export const DisplayBoard = ({numberOfTasks, getAllTasks}) => {

    
    return(
        <div style={{backgroundColor:'green'}} className="display-board">
            <h4 style={{color: 'white'}}>Tasks Created</h4>
            <div className="number">
            {numberOfTasks}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllTasks()} className="btn btn-warning">Get all Tasks</button>
            </div>
        </div>
    )
}