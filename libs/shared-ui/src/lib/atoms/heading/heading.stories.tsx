import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export const Headings = () => (
  <>
    <Heading as="h1" size="4xl">
      Heading 1
    </Heading>
    <Heading as="h2" size="3xl">
      Heading 2
    </Heading>
    <Heading as="h3" size="2xl">
      Heading 3
    </Heading>
    <Heading as="h4" size="xl">
      Heading 4
    </Heading>
    <Heading as="h5" size="lg">
      Heading 5
    </Heading>
    <Heading as="h6" size="md">
      Heading 6
    </Heading>
  </>
);

export const FiraHeadings = () => (
  <>
    <Heading as="h1" size="4xl" variant="fira">
      Heading 1
    </Heading>
    <Heading as="h2" size="3xl" variant="fira">
      Heading 2
    </Heading>
    <Heading as="h3" size="2xl" variant="fira">
      Heading 3
    </Heading>
    <Heading as="h4" size="xl" variant="fira">
      Heading 4
    </Heading>
    <Heading as="h5" size="lg" variant="fira">
      Heading 5
    </Heading>
    <Heading as="h6" size="md" variant="fira">
      Heading 6
    </Heading>
  </>
);

export const DualColor = () => (
  <Heading display="inline-block">
    First part <Box color="primary.500">Second part</Box>
  </Heading>
);

export default {
  component: Heading,
  title: 'Atoms/Heading',
};
