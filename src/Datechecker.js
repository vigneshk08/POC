import React,{Component} from 'react';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';
class Datechecker extends Component{

    onDateChange = (date) =>{
        alert(date)
       // moment("12/12/2021").format('dd/mm/yyyy')
    }

    render(){
        return(
            <div>
           <SingleDatePicker
  date={moment("12/12/2021")} // momentPropTypes.momentObj or null
  onDateChange={this.onDateChange} // PropTypes.func.isRequired
  focused={true} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="12" showDefaultInputIcon inputIconPosition="after"// PropTypes.string.isRequired,
/>
            </div>
        )
    }
}

export  default Datechecker;