import { Box, HStack, VStack, Image, Table, Thead, Tbody, Tr, Th, Td} from "@chakra-ui/react";
import lemonLogo from "../images/little-lemon-compact-sm.png"

const Footer = () => {
    return (
        <Box
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            translateY={0}
            backgroundColor="#EDEFEE"
        >
            <HStack alignItems="center">
                <Box margin={5}>
                    <Image height='150px' pl={5} src={lemonLogo} alt='Little Lemon logo'/>
                </Box>
                <Box color="#495E57" fontWeight='bold' maxWidth="1280px" margin="0 auto">
                    <HStack
                        px={0}
                        py={0}
                        justifyContent="space-between"
                    >
                        <VStack>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Hours</Th>
                                        <Th></Th>
                                        <Th>Locations</Th>
                                        </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td pb={0}>Tuesdays - Fridays:</Td>
                                        <Td pb={0}>3:00 pm - Late</Td>
                                        <Td pb={0}>Chicago:</Td>
                                        <Td></Td>
                                        <Td pb={0}>Seattle:</Td>
                                    </Tr>
                                    <Tr>
                                        <Td pb={0}>Weekends:</Td>
                                        <Td pb={0}>11:00am - Late</Td>
                                        <Td pb={0}>09 W Randolph St, Chicago, IL 60607</Td>
                                        <Td></Td>
                                        <Td pb={0}>2230 1st Ave, Seattle, WA 98121</Td>
                                    </Tr>
                                    <Tr>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </VStack>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default Footer;