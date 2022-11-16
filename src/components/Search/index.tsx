import { Flex, Input } from '@chakra-ui/react';

export default function Search() {
  return (
    <Flex justify="center" p={3}>
      <Input placeholder="Search repositories" />
    </Flex>
  );
}
