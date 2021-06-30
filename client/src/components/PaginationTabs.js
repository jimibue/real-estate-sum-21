import React from 'react'

const PaginationTabs = ({handleClick, currentPage,totalPages}) => {

    const getTabStyle = (num) => {
       if(num === currentPage){
           return {
               ...styles.tab,
               ...styles.active
           }
       }
       return styles.tab
    }

    // i want this to return an array of jsx
    const renderTabs = () =>{
        // I want to <span>{num}</span> numTabs times
        let arrayOfJSX = []
        arrayOfJSX.push(<span style={styles.tab} onClick={()=> handleClick(currentPage !== 1 ? currentPage - 1 :1) }> {'<'} </span>)
        
        if (totalPages>10){
            for(let num = currentPage; num <= currentPage + 3; num++){
                console.log(num)
                arrayOfJSX.push(<span 
                    style={
                        num === currentPage ? {
                        ...styles.tab,
                        ...styles.active
                       }: 
                       {...styles.tab}} 
                onClick={()=> handleClick(num) }>{num}</span>)
                // arrayOfJSX.push(<span style={styles.tab} onClick={()=> handleClick(num) }>{num}</span>)
            }

            arrayOfJSX.push(<span>....</span>)

            console.log('here')
            for(let num = totalPages -3; num <= totalPages; num++){
         
                arrayOfJSX.push(<span 
                    style={
                        num === currentPage ? {
                        ...styles.tab,
                        ...styles.active
                       }: 
                       {...styles.tab}} 
                onClick={()=> handleClick(num) }>{num}</span>)
            }
        }else {
        
        for(let num = 1; num <= totalPages; num++){
            console.log(num)
            arrayOfJSX.push(<span 
                style={
                    num === currentPage ? {
                    ...styles.tab,
                    ...styles.active
                   }: 
                   {...styles.tab}} 
            onClick={()=> handleClick(num) }>{num}</span>)
            // arrayOfJSX.push(<span style={styles.tab} onClick={()=> handleClick(num) }>{num}</span>)
        }
    }
    arrayOfJSX.push(<span style={styles.tab} onClick={()=> handleClick(currentPage + 1) }> {'>'} </span>)
    return arrayOfJSX
}
    return (
        <div style={styles.container}>
            {renderTabs()}
        </div>
    )
}
const styles = {
    container:{

        display:'flex',
        flexWrap:'wrap'
        // justifyContent:'center'
    },
    tab: {
        cursor:'pointer',
        border: '1px solid steelblue',
        borderRadius:'2px',
        minWidth: '28px',
        minHeight: '28px',
        textAlign:'center',
        verticalAlign: 'middle',
        lineHeight: '28px'  
    },
    active: {
       background:'steelblue',
       color:'white'
    }

}


export default PaginationTabs