import React from "react";


const Container = ({children}) => {
    return ( 
        <div style={{width: '1000px', margin: 'auto'}}>
        <div className="row">
        {children}
        </div>
        </div>
     );
}
 
export default Container;