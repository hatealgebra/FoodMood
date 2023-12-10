import React from "react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  Link,
  Spacer,
  Button,
  Heading,
} from "@chakra-ui/react";

interface ModalContactProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const ModalContact = ({ isOpen, onOpen, onClose }: ModalContactProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as="h2" variant="fira">
            Contact us
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Hello, if do you have any questions, ideas, fix bugs, give me tips or
          just chat, please feel free to contact me in one of the links below.
          Thank you.
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Link
              href="https://www.linkedin.com/in/pavel-vondra-603012201/"
              target="_blank"
              variant="button"
            >
              <Button size="md" variant="link" colorScheme="secondary">
                Linked In
              </Button>
            </Link>
            <Spacer />
            <Link variant="button" href="mailto:pavelvondra66@gmail.com">
              <Button size="md" variant="link" colorSchem="tertiary">
                Email Us
              </Button>
            </Link>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalContact;
