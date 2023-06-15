import React from "react";
import HomeCategoryCards from "../components/HomeCategoryCards";
import { Flex, Heading } from "@chakra-ui/react";
import bgImage from "../assets/BackgroundImage.jpg";
import UpdateForm from "../components/updateProfileComponent";
import Login from "../components/Logintest";
import Registration from "../components/RegisterTest";
import Listings from "../components/AllListingTesting";

function Home(props) {
  const product = {
    title: "Product Title",
    image: "..srcassetsWebsite Logologo-black.png",
    description: "Product description goes here",
    price: 19.99,
    category: "Category",
  };

  return (
    <>
      <Flex
        w="full"
        h="80vh"
        bgImage={bgImage}
        bgSize="cover"
        bgPosition="center center"
        mb="7"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
          Welcome to the World of Technology!
        </Heading>
      </Flex>
      <Login/>
      <Registration/>
      <Listings/>
      <HomeCategoryCards />
    </>
  );
}

export default Home;
