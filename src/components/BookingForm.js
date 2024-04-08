import {useState} from "react";
import FullScreenSection from "./FullScreenSection";
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    VStack,
    HStack
  } from "@chakra-ui/react";

const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [ocassion, setOcassion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        console.log("Form Submitted!");
    }

    const handleDateChange = (e) => {
        console.log(e);
        setDate(e);
        props.dispatch(e);
    }

    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#495E57"
        >
            <h1>Reserve a Table</h1>
            <form onSubmit={handleSubmit}>
                <VStack display='grid'>
                    <HStack>
                        <FormLabel htmlFor="res-date" aria-labelledby="res-date">Choose Date</FormLabel>
                        <Input type="date" id="res-date" value={date} onChange={e => handleDateChange(e.target.value)} required/>
                        <FormLabel htmlFor="res-time" aria-labelledby="res-time">Choose Time</FormLabel>
                        <Select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
                            {props.availableTimes.times.map(availableSlot => {return <option key={availableSlot} value={availableSlot}>{availableSlot}</option>})}
                        </Select>
                    </HStack>
                    <HStack>
                        <FormLabel htmlFor="guests" aria-labelledby="guests">Nbr of Guests</FormLabel>
                        <Input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                        <FormLabel htmlFor="occasion" aria-labelledby="ocassion">Occasion</FormLabel>
                        <Select id="occasion" value={ocassion} onChange={e => setOcassion(e.target.value)} required>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Select>
                    </HStack>
                </VStack>
                <VStack>
                    <input className='submitBttn' type="submit" value="Make Your Reservation" />
                </VStack>
            </form>
        </FullScreenSection>
    )
}

export default BookingForm;