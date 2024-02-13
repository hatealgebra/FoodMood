import { SetStateAction } from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuOptionGroup,
  MenuItemOption,
  HStack,
  Box,
} from '@chakra-ui/react';

import { IoMdArrowDropdown } from 'react-icons/io';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { AiOutlineFire } from 'react-icons/ai';
import { CgTime } from 'react-icons/cg';
import { SORT_RECIPES_BY } from 'shared-types';

export interface DropdownProps {
  sortBy: SetStateAction<any>;
  setSortBy: SetStateAction<any>;
  buttonText: string;
  sort?: boolean;
}

const Dropdown = ({ sortBy, setSortBy, buttonText, sort }: DropdownProps) => {
  const transformValue = (value: string, splitSymbol: string) => {
    const splitValue = value.split(splitSymbol);
    const icon = splitValue[0].match(/cals/i) ? (
      <AiOutlineFire />
    ) : splitValue[0].match(/time/i) ? (
      <CgTime />
    ) : (
      ''
    );
    const text = splitValue.slice(1, splitValue.length).join(' ');
    return (
      <HStack spacing={1.5} align="center" textTransform="capitalize">
        <Box fontWeight="400">{buttonText}:</Box>
        {icon}
        <Box>{text || 'Default'}</Box>
      </HStack>
    );
  };

  return sort ? (
    <Menu>
      <MenuButton
        fontSize="sm"
        fontWeight="300"
        as={Button}
        colorScheme="gray"
        variant="ghost"
        rightIcon={<RiArrowUpDownLine />}
        iconSpacing={6}
        py={4}
      >
        {transformValue(sortBy, '-')}
      </MenuButton>
      <MenuList borderColor="primary.500" borderWidth="3px" borderRadius="15px">
        <MenuOptionGroup
          value={sortBy}
          onChange={setSortBy}
          type="radio"
          defaultValue="default"
        >
          <MenuItemOption value="default">Default</MenuItemOption>
          <MenuItemOption value={SORT_RECIPES_BY.CALS_LOW_HIGH}>
            Calories: Low To High
          </MenuItemOption>
          <MenuItemOption value={SORT_RECIPES_BY.CALS_HIGH_LOW}>
            Calories: High To Low
          </MenuItemOption>
          <MenuItemOption value={SORT_RECIPES_BY.TIME_LOW_HIGH}>
            Time: Low To High
          </MenuItemOption>
          <MenuItemOption value={SORT_RECIPES_BY.TIME_HIGH_LOW}>
            Time: High To Low
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  ) : (
    <Menu data-testid="diet-dropdown">
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            colorScheme="gray"
            rightIcon={
              <IoMdArrowDropdown
                style={{
                  transition: '.2s ease',
                  transform: `${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                }}
              />
            }
            variant="outline"
            border="2px"
            width="170px"
            iconSpacing="90%"
            fontSize="sm"
            fontWeight="400"
            py={4}
          >
            {buttonText}
          </MenuButton>
          <MenuList minWidth="170px" width="150px" aria-label="diet-menu-list">
            <MenuOptionGroup type="checkbox">
              <MenuItemOption value="balanced">Balanced</MenuItemOption>
              <MenuItemOption value="high-fiber">High-fiber</MenuItemOption>
              <MenuItemOption value="hight-protein">
                High-protein
              </MenuItemOption>
              <MenuItemOption value="low-carb">Low-carb</MenuItemOption>
              <MenuItemOption value="low-sodium">Low-sodium</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
