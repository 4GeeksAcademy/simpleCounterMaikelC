
import React from "react";
import PropTypes from 'prop-types'


const SimpleCounter = (props)=>{
    return(
    <div className=" container" id="container ">
        <div className="img">
            <i className="fa fa-light fa-clock"></i>
            </div>
            <div className="six">
                {props.digitSix}
            </div>
            <div className="five">
                {props.digitFive}
            </div>
             <div className="four">
                {props.digitFour}
            </div>
            <div className="three">
                {props.digitThree}
            </div>
            <div className="two">
                {props.digitTwo}
            </div>
            <div className="one">
                {props.digitOne}
            </div>
    </div>
    );
}
SimpleCounter.propTypes = {
            digitSix: PropTypes.number,
            digitFive: PropTypes.number,
            digitFour: PropTypes.number,
            digitThree: PropTypes.number,
            digitTwo: PropTypes.number,
            digitOne: PropTypes.number
        };
export default SimpleCounter;