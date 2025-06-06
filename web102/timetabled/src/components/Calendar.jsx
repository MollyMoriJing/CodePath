import React from "react"
import Event from './Event'
const Calendar = () => {

    return (

        <div className="Calendar">
            <table>
            <thead>
            <tr>
              <th></th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
        
            <tr>
                <td className="time">8 am</td>
                <Event event='Fancy Dinner 🎩' color ='green' />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">9 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tbody>
            </tbody>    
          </table> =
        </div>
        
    )
  
}

export default Calendar