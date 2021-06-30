import React from 'react'

const PaginationTabs = ({handleClick}) => {

    // i want this to return an array of jsx
    const renderTabs = (numTabs) =>{
        // I want to <span>{num}</span> numTabs times
        let arrayOfJSX = []
        for(let num = 1; num <= numTabs; num++){
            console.log(num)
            arrayOfJSX.push(<span onClick={()=> handleClick(num) }>{num}</span>)
        }
        return arrayOfJSX
    }
    return (
        <div>
            {renderTabs(6)}
        </div>
    )
}


export default PaginationTabs