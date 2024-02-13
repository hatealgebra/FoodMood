import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center minHeight="80vh">
      <Spinner size="xl" />
    </Center>
  );
};

export default Loading;
