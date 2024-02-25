import { UseToastOptions, createStandaloneToast } from '@chakra-ui/react';
import { theme } from 'ui-shared';

const DURATION = 3000;

const { toast } = createStandaloneToast({ theme });

const showToast = async (
  title: string,
  description: string,
  status?: UseToastOptions['status']
) => {
  toast({
    title,
    description,
    status: status || 'info',
    duration: DURATION,
    isClosable: true,
    position: 'top',
  });
};

export default showToast;
