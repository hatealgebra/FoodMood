import React from 'react';
import {
  Heading,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

export const ListExample = () => (
  <figure>
    <figcaption>
      <Heading variant="fira" pb="10px">
        Heading
      </Heading>
    </figcaption>
    <List>
      <ListItem>Item number one</ListItem>
      <ListItem>Item number two</ListItem>
      <ListItem>Item number three</ListItem>
    </List>
  </figure>
);
export const OrderedListExample = () => (
  <OrderedList>
    <ListItem>Item number one</ListItem>
    <ListItem>Item number two</ListItem>
    <ListItem>Item number three</ListItem>
    <ListItem>Item number one</ListItem>
    <ListItem>Item number two</ListItem>
    <ListItem>Item number three</ListItem>
  </OrderedList>
);
export const UnstyledList = () => (
  <UnorderedList>
    <ListItem>Item number one</ListItem>
    <ListItem>Item number two</ListItem>
    <ListItem>Item number three</ListItem>
  </UnorderedList>
);

export default {
  component: List,
  title: 'Atoms/List',
};
