import React from 'react';
import "./createatravel.css";

class Createatravel extends React.Component {
    render() {
        return (
            <div class="createtravel">
               <h1> Create a travel </h1>

               <div class="form">
                   <form>
                       <div class="inputfields">
                        <input type="text" placeholder="Party name"></input>
                        <input type="text" placeholder="Postal code of departure"></input>
                        <input type="decimal" placeholder="Price"></input>
                        <input type="number" placeholder="Persons"></input>
                        <button>Create</button>  
                       </div>
                       
                   </form>
               </div>
            </div>
        )
    }
}

export default Createatravel;