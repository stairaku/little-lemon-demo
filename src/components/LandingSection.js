import React from "react";
import { Link } from "react-router-dom";
import { Image, Button, HStack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import chef from "../images/chef-lg.jpg"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#495E57"
  >
    <HStack>
        <VStack spacing={0} alignItems='left'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
            <Link to='/reserve'>
              <Button width='150px' margin={10} colorScheme='yellow'>Reserve Table</Button>
            </Link>
        </VStack>
        <Image src={chef} width={300} mr='20%'/>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;