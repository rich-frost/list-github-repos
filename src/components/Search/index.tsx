import { Flex, Text, Input, Center } from '@chakra-ui/react';

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export default function Search({ search, setSearch }: SearchProps) {
  return (
    <Flex justify="space-evenly">
      <Center w="200px">
        <Text>Search repos by topic</Text>
      </Center>

      <Input
        placeholder="Enter topic"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </Flex>
  );
}
