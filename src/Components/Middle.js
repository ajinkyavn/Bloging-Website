import React from "react";
import Categories from "./Categories";
import Display from "./Display";
import "../Style/Middle.css"

class Middle extends React.Component{
    render(){
        return(
        <div className="MiddleWrap">
            <Categories />
            <Display />
        </div>
    )}
}
 
export default Middle;