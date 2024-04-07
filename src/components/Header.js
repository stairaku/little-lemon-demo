import { Box, HStack, Image, Button } from "@chakra-ui/react";
import lemonLogo from "../images/little_lemon_sm.jpg"

const Header = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            backgroundColor="#EDEFEE"
        >
            <HStack alignItems="center">
                <Image src={lemonLogo} padding={5} ml={5} mr={5} width='20%' height='auto' alt='Little Lemon logo' />
                <Box color="#495E57" fontWeight='bold' maxWidth="1280px" margin="0 auto">
                    <HStack
                        px={0}
                        py={0}
                        justifyContent="space-between"
                    >
                        <nav>
                            <HStack spacing={38} fontSize={18} alignItems='center'>
                                <a href="/#home" class='nav-link' onClick={handleClick("home")}>Home</a>
                                <a href="/#menu" class='nav-link' onClick={handleClick("menu")}>Menu</a>
                                <a href="/#about-us" class='nav-link' onClick={handleClick("special")}>Specials!</a>
                                <a href="/#about-us" class='nav-link' onClick={handleClick("about-us")}>About Us</a>
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
                <Button colorScheme='teal' variant='outline' ml={200}>Reserve</Button>
                <Button colorScheme='teal' variant='solid'mr={20} >Order Online</Button>
            </HStack>
        </Box>
    )
}

export default Header;