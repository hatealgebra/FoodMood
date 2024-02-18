import {
  HStack,
  Stack,
  Text,
  VStack,
  Box,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { GrInstagram, GrLinkedin } from 'react-icons/gr';
import { BiCopyright } from 'react-icons/bi';
import { CustomIcon, Logo } from '~shared-ui';
import ROUTE_WEB from '../../route.constants';

// TODO fix Nav list menu

const Footer = () => {
  // const { ROUTE_APP, ROUTE_WEB } = routerConstantClass;
  return (
    <footer>
      <Box
        p={{ base: '30px 10px', sm: '30px 20px', md: '50px 40px 20px 40px' }}
        bg="#f2f2f2"
      >
        <Stack
          direction={['column', 'column', 'row']}
          spacing={12}
          justify="space-around"
          width={['90%', '80%']}
          maxW="800px"
          margin="auto"
        >
          <VStack align="flex-start" spacing={5}>
            <RouterLink to={ROUTE_WEB.HOME_PAGE.path}>
              <Logo />
            </RouterLink>
            <Text maxW={['220px', '270px']}>
              Food Mood is the app that helps you with meal diversity and
              healthy lifestyle
            </Text>
            <HStack spacing={5} color="tertiary.500">
              <Link
                as={RouterLink}
                to="https://www.instagram.com/hatealgebra/"
                isExternal
                aria-label="social-link"
              >
                <CustomIcon icon={GrInstagram} color="secondary" />
              </Link>
              <Link
                as={RouterLink}
                to="https://www.linkedin.com/in/pavel-vondra-603012201/"
                isExternal
                aria-label="social-link"
              >
                <CustomIcon icon={GrLinkedin} color="secondary" />
              </Link>
            </HStack>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="700" m={0}>
              Navigate
            </Text>

            <List spacing={3} as={VStack} variant="nav">
              <ListItem>
                <Link as={RouterLink} to={ROUTE_WEB.HOME_PAGE.path}>
                  Homepage
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RouterLink} to={ROUTE_WEB.ABOUT_PAGE.path}>
                  About app
                </Link>
              </ListItem>
              <ListItem>
                <Link as={RouterLink} to={ROUTE_WEB.TERMS_POLICY_PAGE.path}>
                  Terms & Policy
                </Link>
              </ListItem>
            </List>
          </VStack>
        </Stack>
        <HStack justify="center" fontWeight="400" mt={20}>
          <CustomIcon icon={BiCopyright} />
          <Text color="mono.400">2021 FoodMood. All rights reserved.</Text>
        </HStack>
      </Box>
    </footer>
  );
};

export default Footer;
