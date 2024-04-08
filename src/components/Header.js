import { Box, HStack, Image, Button } from "@chakra-ui/react";
import lemonLogo from "../images/little_lemon_sm.jpg"
import { Link } from "react-router-dom";

const Header = () => {
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
                                <Link to="/" class='nav-link'>Home</Link>
                                <Link to="/menu" class='nav-link'>Menu</Link>
                                <Link to="/specials" class='nav-link'>Specials!</Link>
                                <Link to="/about-us" class='nav-link'>About Us</Link>
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
                <Link to='/reserve'>
                    <Button colorScheme='teal' variant='outline' ml={200}>Reserve</Button>
                </Link>
                <Link to='/order-online'>
                    <Button colorScheme='teal' variant='solid'mr={20} >Order Online</Button>
                </Link>
            </HStack>
        </Box>
    )
}

export default Header;