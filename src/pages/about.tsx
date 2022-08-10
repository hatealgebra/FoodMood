import React from "react";

import {
  Text,
  SimpleGrid,
  Image,
  Divider,
  Link,
  Center,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import Section from "../components/atoms/section/Section";
import { BlogPage } from "../components/templates/genericPage/GenericPage";

import reactIcon from "../assets/images/stack/react-js.png";
import chakraUi from "../assets/images/stack/chakra-ui.png";
import reduxIcon from "../assets/images/stack/redux-icon.png";
import rtlPng from "../assets/images/stack/rtl.png";
import cypressPng from "../assets/images/stack/cypress-logo.png";
import firebasePng from "../assets/images/stack/firebase-logo.png";
import storybookPng from "../assets/images/stack/storybook-logo.png";
import portrait from "../assets/images/stack/portrait-me.jpg";

const about = () => {
  return (
    <BlogPage>
      <Section>
        <Heading as="h2">Welcome to Food Mood App!</Heading>
        <Text>
          Hey, welcome to my "app" that I have created in my journey to become
          front end developer. A little bit more about about this small project.
        </Text>
      </Section>
      <Section>
        <Heading as="h2">Built with...</Heading>
        <Text>
          App is built with HTML, CSS & React. Redux was used for state
          management such as user data, search results, modal data, etc...
        </Text>
        <Text>Components were created in storybook for more complex view.</Text>
        <Text>
          For testing purposes I've used React Testing Library for unit and
          integration tests. Test case scenarios were done with Cypress.
        </Text>
        <Text>
          All of the data and recipes comes from this{" "}
          <Link color="blue.400" target="_blank" href="https://www.edamam.com">
            awesome API
          </Link>
          . It is called EDAMAM and there is a lot of free plans for developers
          to try the API. In this case I've choosed Recipe Search API
        </Text>
        <SimpleGrid
          templateColumns={["1fr 1fr", "1fr 1fr 1fr"]}
          mt={["10px", "30px"]}
          placeItems="center"
          sx={{ img: { objectFit: "contain" } }}
          spacing="10px"
        >
          <Image
            placeSelf="center"
            boxSize="100px"
            alt="react-js icon"
            src={reactIcon}
            bg="none"
          />
          <Image boxSize="150px" alt="chakra-ui icon" src={chakraUi} />
          <Image boxSize="120px" alt="react-js icon" src={reduxIcon} />
          <Image boxSize="120px" alt="react-js icon" src={rtlPng} />
          <Image boxSize="120px" alt="react-js icon" src={cypressPng} />
          <Image boxSize="120px" alt="react-js icon" src={firebasePng} />
          <Image
            position="relative"
            top={"-20px"}
            boxSize="120px"
            alt="react-js icon"
            src={storybookPng}
          />
        </SimpleGrid>
      </Section>
      <Section>
        <Heading as="h2">Functionalities</Heading>
        <UnorderedList>
          <ListItem>Login or signup with Google services</ListItem>
          <ListItem>Login or sginup with Firebase authentication</ListItem>
          <ListItem>Searching through the recipes</ListItem>
          <ListItem>Saveing/Removing recipes</ListItem>
          <ListItem>Making meal plan from recipes</ListItem>
          <ListItem>Sorting recipes</ListItem>
        </UnorderedList>
      </Section>
      <Section>
        <Heading as="h2">About me</Heading>
        <Center my="20px">
          <Image boxSize="150px" src={portrait} borderRadius="50%" />
        </Center>
        <Text>
          Hey, my name is Paul. Striving for Front end developer job. Currently
          IT administrator. Playing basketball in Germany. Pizza lover.
        </Text>
        <Divider />
        <Text>
          If you are interested in my journey, chat with me or eventually want
          to see more of my work write me here or follow me in one of the links.
        </Text>
        <Divider />
        <Text>
          Storybook{" "}
          <Link color="blue.600" href="#">
            here.
          </Link>
        </Text>
        <Text>
          Github repository{" "}
          <Link color="blue.600" href="#">
            here.
          </Link>
        </Text>
      </Section>
    </BlogPage>
  );
};

export default about;
