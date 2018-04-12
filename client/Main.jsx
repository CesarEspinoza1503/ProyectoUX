import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; //npm install --save react-addons-css-transition-group




export default class Main extends Component {

    render(){
        return (
			
           	<form>
				<h2>Origen</h2>
           		<select name="Origen">
					   <option value="Tegucigalpa">Tegucigalpa</option>
					   <option value="Ceiba">La Ceiba</option>
					   <option value="SPS">San Pedro Sula</option>
				   </select>
				<h2>Destino</h2>
				   <select name="Destino">
					   <option value="Ceiba">La Ceiba</option>
					   <option value="Tegucigalpa">Tegucigalpa</option>
					   <option value="SPS">San Pedro Sula</option>
				   </select>
				   <br></br>
            	<label>
               	 	Fecha ida:
                	<input type="text" name="origen"/>
            	</label>
            	<label>
                	Fecha de Regreso:
                	<input type="text" name="origen"/>
            	</label>
            	    <h3>clase </h3>
        	 	<select>
            		<option value="Turista">Turista</option>
             		<option value="VIP">VIP</option>
        	 	</select>
				 <br></br>
				 <a href="/App"><button>Pago</button></a> 
        	</form>
			

        );
    }
}