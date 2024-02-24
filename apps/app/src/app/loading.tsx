import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Center minHeight="80vh">
      <Spinner size="xl" />
    </Center>
  );
}
