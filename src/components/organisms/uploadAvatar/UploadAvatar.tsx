import React, { useState } from "react";

import AvatarEdit from "react-avatar-edit";

import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import useWindowSize from "../../../utils/hooks/useWindowSize";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";

// TODO Update rules for firestore and storage. Set anonymous sign in when testing in storybook and node with react-testing-library
// TODO Down size image to get it more crisp
// TODO Write tests

interface UploadAvatarProps {
  uid: string;
  photoURL?: string;
}

const UploadAvatar = ({ uid, photoURL }: UploadAvatarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const windowsSize = useWindowSize();
  const { currentUser } = getAuth();

  const storageRef = ref(getStorage(), `profilePictures/${uid}/avatar.png`);

  const uploadAvatar = async (baseString: string | undefined) => {
    if (baseString && currentUser) {
      try {
        const base64 = baseString.split(",")[1];
        await uploadString(storageRef, base64, "base64");
        const url = await getDownloadURL(storageRef);
        updateProfile(currentUser, {
          photoURL: url,
        });
        onClose();
        setPreview(undefined);
      } catch (e) {
        return toast({
          title: "Error",
          description: "Photo couldn't be uploaded",
          status: "error",
        });
      }
    }
  };

  return (
    <>
      <Avatar onClick={onOpen} size="2xl" src={photoURL} cursor="pointer" />
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay onClose={onclose} />
        <ModalContent p="5px 5px 10px 5px">
          <ModalHeader>Select your avatar:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Stack spacing={10} direction={{ base: "column", sm: "row" }}>
                <AvatarEdit
                  height={windowsSize.height > 500 ? 230 : 180}
                  width={windowsSize.width > 500 ? 230 : 180}
                  onCrop={(data: string) => setPreview(data)}
                />
                <Box
                  alignSelf="center"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Heading as="h4" variant="fira">
                    Avatar
                  </Heading>
                  <Image
                    mt="10px"
                    width={90}
                    src={preview}
                    alt={preview ? "Avatar set" : "No preview"}
                  />
                </Box>
              </Stack>
            </Center>
          </ModalBody>
          <ModalFooter py={7} sx={{ "& > *": { margin: "auto" } }}>
            <Button
              size="lg"
              colorScheme="tertiary"
              onClick={() => uploadAvatar(preview)}
            >
              Set avatar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadAvatar;
