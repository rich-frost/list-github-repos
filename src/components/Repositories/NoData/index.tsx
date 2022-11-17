import { Tr, Td, Icon, Center } from '@chakra-ui/react';
import { BiError } from 'react-icons/bi';

export default function NoData() {
  return (
    <Tr>
      <Td colSpan={3}>
        <Center>
          <Icon as={BiError} mx="5px" /> No repositories found
        </Center>
      </Td>
    </Tr>
  );
}
