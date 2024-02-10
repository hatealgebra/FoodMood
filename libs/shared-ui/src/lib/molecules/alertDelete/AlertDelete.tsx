import React, { useState } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

export interface AlertDeleteProps {
  action: () => void;
  heading: string;
  button: string;
  children: string;
}

const AlertDelete = ({
  heading,
  children,
  action,
  button,
}: AlertDeleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = React.useRef(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const confirmAction = () => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      <Button colorScheme="warning" onClick={onOpen}>
        {button}
      </Button>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>{heading}</AlertDialogHeader>
            <AlertDialogBody>{children}</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={confirmAction}
                ml={5}
                colorScheme="warning"
                ref={cancelRef}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlertDelete;
