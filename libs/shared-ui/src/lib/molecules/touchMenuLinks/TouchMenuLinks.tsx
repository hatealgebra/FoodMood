import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
// import NextLink from 'next/link';

// import * as routerConstantClass from '~constants/router.constants';

interface TouchMenuLinksProps {
  noMargin?: boolean;
}

const TouchMenuLinks = ({ noMargin }: TouchMenuLinksProps) => {
  return (
    <UnorderedList
      mt={20}
      gridArea="list"
      listStyleType="none"
      fontSize="xl"
      fontWeight="bold"
      spacing={8}
      colorScheme="mono"
      mx={noMargin ? 0 : [5, 16]}
    >
      <ListItem>
        <Link href="/" color="mono.500">
          Homepage
        </Link>
      </ListItem>
      <ListItem>
        <Link href={''} color="mono.500">
          Explore App
        </Link>
      </ListItem>
      <ListItem>
        <Link href={''} color="mono.500">
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link href={''} color="mono.500">
          Terms & policy
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default TouchMenuLinks;
