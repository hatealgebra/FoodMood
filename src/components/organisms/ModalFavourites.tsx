import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
} from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import useFavouriteRecipes from "~hooks/useFavouriteRecipes";
import { useAppDispatch } from "~store/hooks";
import { openModal } from "~store/slices/modalRecipe.slice";

interface ModalFavouritesProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalFavourites = ({ isOpen, onClose }: ModalFavouritesProps) => {
  const { savedRecipes, savedRecipesStatus, savedRecipesError } =
    useFavouriteRecipes();
  const dispatch = useAppDispatch();

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading variant="fira" as="h2" size="xl" textAlign="center">
            <Box color="#373737" textTransform="uppercase" display="inline">
              Your favourite
            </Box>
            <Box
              ml={2}
              textTransform="uppercase"
              color={"primary.500"}
              display="inline"
            >
              recipes
            </Box>
          </Heading>
        </ModalHeader>
        <ModalBody>
          <List>
            {savedRecipes.map((recipe) => {
              return (
                <ListItem
                  display="flex"
                  key={recipe.label}
                  borderTop="1px solid lightGray"
                  m="0"
                  justifyContent="space-between"
                  alignItems="center"
                  pr="2%"
                >
                  <Heading fontFamily="body" as="h4" display="inline">
                    <Flex
                      justifyContent="space-between"
                      gap="15px"
                      p="15px 5px"
                      alignItems="center"
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize="md"
                        fontWeight="400"
                      >
                        {recipe.label}
                      </Box>
                      <Tag color="secondary.500" fontSize="sm">
                        {recipe.mealType}
                      </Tag>
                    </Flex>
                  </Heading>
                  <ButtonGroup>
                    <Button
                      size="sm"
                      colorScheme="primary"
                      w="full"
                      onClick={() => dispatch(openModal(recipe))}
                    >
                      Show
                    </Button>
                    <Button w="full" size="sm" colorScheme="tertiary">
                      Add
                    </Button>
                  </ButtonGroup>
                </ListItem>
              );
            })}
          </List>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalFavourites;
