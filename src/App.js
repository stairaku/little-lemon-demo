import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import LandingSection from './components/LandingSection';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from "./components/ConfirmedBooking";
import NotFound from './components/NotFound';

function App() {
  return (
    <ChakraProvider>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<LandingSection />} />
            <Route path="confirmed" element={<ConfirmedBooking />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="reserve" element={<BookingPage />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
