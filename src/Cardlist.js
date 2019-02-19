import React from 'react';
import Card from "./Price";
import 'tachyons';
{/*import {robots} from "./robots.js"; */}

const Cardlist = ({robots}) =>
{
    const cardComponent=robots.map((user,i)=>{
        return (    <div className="w-25 pa2">
                    <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
                    </div>          
                )          
                   
    } )
    
    return(
        <div className="container-fluid flex flex-wrap ">
            {cardComponent} 
           {/*<div className="container-fluid flex ">
                        <div className="outline w-50 pa3 mr2">
                        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>            
                        </div>
//                        <div className="outline w-50 pa3 mr2">
//                        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>            
//                        </div>
//                         <div className="outline w-50 pa3 mr2">
//                        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>            
//                        </div>
//                         <div className="outline w-50 pa3 mr2">
//                        <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>            
//                        </div> 

                </div>            
                 <div className="container-fluid flex">
                        <div className="outline w-50 pa3 mr2">
                        <Card />            
                        </div>
                   <div className="outline w-50 pa3 mr2">
                        <Card />            
                        </div>
                   <div className="outline w-50 pa3 mr2">
                        <Card />            
                        </div>
                   <div className="outline w-50 pa3 mr2">
                        <Card />            
                        </div>                          
                </div>*/}
        </div>
        ); 
    }
    
export default Cardlist;