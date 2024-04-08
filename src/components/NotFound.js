import FullScreenSection from "./FullScreenSection";
import { HStack, Image } from "@chakra-ui/react";
import notFound from '../images/404-not-found.png'

const NotFound = () => {
    return(
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#333333"
        >
            <HStack>
                <Image src={notFound} width='25%' margin={10}/>
                <h1>Page Not Found!</h1>
            </HStack>
        </FullScreenSection>
    )
}

export default NotFound;