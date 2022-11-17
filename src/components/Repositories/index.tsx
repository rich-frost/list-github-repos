import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Icon,
} from '@chakra-ui/react';
import { GoStar, GoRepoForked } from 'react-icons/go';
import { SearchEdge } from '../../types/search';
import Footer from './Footer';
import NoData from './NoData';
import Row from './Row';

type RepositoriesProps = {
  data: SearchEdge[];
};

export default function Repositories({ data }: RepositoriesProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>
              <Icon as={GoStar} /> Stars
            </Th>
            <Th>
              <Icon as={GoRepoForked} /> Forks
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length === 0 && <NoData />}
          {!!data &&
            data.map((repo) => <Row key={repo.node.id} data={repo.node} />)}
        </Tbody>
        {!!data && data.length > 0 && <Footer />}
      </Table>
    </TableContainer>
  );
}
