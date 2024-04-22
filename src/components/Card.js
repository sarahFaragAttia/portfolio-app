import { Heading, HStack, Image, Text, VStack,Stack,Card,CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardComp = ({ title, description, imageSrc }) => {
  return(
    <Card maxW='xlg'>
  <CardBody>
    <Image
      src={imageSrc}
      borderRadius='lg'
      
       />
    <Stack mt='6' spacing='3'>
    <Heading size='sm'>{title}</Heading>
    <Text fontSize='sm' color="gray">
    {description}
    </Text>
    <HStack>
    <Text color='black' fontSize='sm'>
      see more
    </Text>
     <FontAwesomeIcon icon={faArrowRight} size="1x" />
     </HStack>
    
  </Stack>
</CardBody>
</Card>
  
  )
};

export default CardComp;
