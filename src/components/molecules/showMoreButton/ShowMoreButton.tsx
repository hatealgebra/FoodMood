import { Button, Center } from "@chakra-ui/react";
import React from "react";
import { ThunkActionDispatch } from "redux-thunk";
import { useAppDispatch } from "../../../store/hooks";

// FIXME: Typing for the dispatch thunk action
const ShowMoreButton = ({ nextLink, dispatchAction }: showMoreButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <Center width="100%">
      <Button
        onClick={() => dispatch(dispatchAction(nextLink))}
        colorScheme="primary"
        my="30px"
      >
        Show More
      </Button>
    </Center>
  );
};

interface showMoreButtonProps {
  nextLink?: string;
  dispatchAction: Dispatch<any>;
}

export default ShowMoreButton;
