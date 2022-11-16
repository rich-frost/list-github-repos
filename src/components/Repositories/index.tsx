import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
} from '@chakra-ui/react';
import { GoStar, GoRepoForked } from 'react-icons/go';

export default function Repositories() {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>
              Stars <Icon as={GoStar} />
            </Th>
            <Th>
              Forks <Icon as={GoRepoForked} />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Redux</Td>
            <Td>
              60,000 <Icon as={GoStar} />
            </Td>
            <Td>
              32,000 <Icon as={GoRepoForked} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
