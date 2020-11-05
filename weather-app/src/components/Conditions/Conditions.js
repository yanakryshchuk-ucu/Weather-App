import React from 'react';
import classes from './Conditions.module.css'
const conditions = (props) => {
   return (
       <div className={classes.Wrapper}>
           {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

           {props.loading && <div className={classes.Loader} ></div>}
           {props.responseObj.cod === 200 ?
               <div>
                   <p>City: <strong>{props.responseObj.name}</strong></p>
                   <p>Temperature: <strong>{Math.round(props.responseObj.main.temp)} degrees</strong> </p>
                   <p>Weather conditions: <strong>{props.responseObj.weather[0].description}</strong></p>
                   <p>Humidity: <strong>{props.responseObj.main.humidity}</strong></p>
                   <p>Pressure: <strong>{props.responseObj.main.pressure} hPa </strong></p>
                   <p>Wind speed: <strong>{props.responseObj.wind.speed} m/s </strong></p>
               </div>
           : null
           }
       </div>
   )
}
export default conditions;