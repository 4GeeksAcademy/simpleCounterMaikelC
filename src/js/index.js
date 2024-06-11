//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter.jsx"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/10000)%10;
    const five = Math.floor(counter/10000)%10;
    const four = Math.floor(counter/1000)%10;
    const three = Math.floor(counter/100)%10;
    const two = Math.floor(counter/10)%10;
    const one = Math.floor(counter/1)%10;
    counter++
    console.log(six,five,four,three,two,one)
    ReactDOM.render(<Counter
        digitSix={six}
        digitFive={five}
        digitFour={four}
        digitThree={three}
        digitTwo={two}
        digitOne={one}
                     />, 
    document.querySelector("#app"));
}, 1000);

//render your react application
