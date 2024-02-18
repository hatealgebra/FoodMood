import React, { ReactElement } from 'react';
import {
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

// const FigureStyled = styled.figure<{ noPadding?: boolean }>`
//   margin: 0;
//   padding: 0;

//   & ul {
//     padding-inline-start: ${(props) => (props.noPadding ? '0px' : '20px')};
//     margin: 5px 0 0 0;
//     text-align: left;
//   }
// `;

const List = ({
  data,
  ordered = false,
  title,
  unstyled,
  spacing,
  noPadding,
}: ListProps) => {
  return (
    // <FigureStyled noPadding={noPadding}>
    <div>
      <figcaption>
        <Heading textAlign="center" fontFamily="Kalam">
          {title}
        </Heading>
      </figcaption>
      {ordered === true ? (
        <OrderedList spacing={spacing}>
          {data.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </OrderedList>
      ) : (
        <UnorderedList
          spacing={spacing}
          styleType={(unstyled && 'none') || 'disc'}
        >
          {data.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </UnorderedList>
      )}
    </div>
    // </FigureStyled>
  );
};

interface ListProps {
  data: (string | ReactElement)[];
  title?: string;
  ordered?: boolean;
  unstyled?: boolean;
  spacing?: number;
  noPadding?: boolean;
}

export default List;
