import { VStack } from '@chakra-ui/react';
import Repositories from '../Repositories';
import Search from '../Search';

export default function Main() {
  return (
    <VStack spacing={4} align="stretch">
      <Search />
      <Repositories />
    </VStack>
  );
}
