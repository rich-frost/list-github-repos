import { Flex, Heading } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex justify="center" borderBottom="1px" borderColor="gray.200" p={3}>
      <Heading as="h3" size="lg" m={1}>
        View React GitHub repos
      </Heading>
    </Flex>
  );
}
