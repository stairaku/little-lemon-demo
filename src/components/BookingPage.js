import Header from './Header'
import BookingForm from './BookingForm'
import {useReducer} from "react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = (date) => {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const initializeTimes = 
         {times: fetchAPI(new Date())};
    
    
    const updateTimes = (date) => {
        return {times: fetchAPI(new Date(date))};
    }

    const navigate = useNavigate();
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }
    

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    console.log(availableTimes)

    return(
        <>
            <Header/>
            <BookingForm availableTimes = {availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </>
       
    )
}

export default BookingPage;