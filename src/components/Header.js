import React, { useEffect, useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const nav=useRef()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
  });
  const [scrollY ,SetScrollY]=useState({down:0,up:`${window.scrollY}`})
  console.log('first',scrollY.up)
  const handleScroll = () => {

SetScrollY((prevY)=>{return {up:scrollY.down,down:`${window.scrollY}`}} )
console.log(scrollY.up)
console.log(scrollY.down)
    if (scrollY.down>scrollY.up) {
      nav.current.style.transform = "translateY(-100%)";
      nav.current.style.transitionDuration = ".3s";
    }
   if(scrollY.down<scrollY.up){
      nav.current.style.transform = "translateY(0)";
      nav.current.style.transitionDuration = ".3s";
      
    }
  };
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
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={nav}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"15%"}}>
          {socials.map((item)=>
         <a href={item.url}  > <FontAwesomeIcon icon={item.icon}  /></a>)}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects-section"   onClick={handleClick}>Projects</a>
              <a href="/#contactme-section"  onClick={handleClick}>contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
