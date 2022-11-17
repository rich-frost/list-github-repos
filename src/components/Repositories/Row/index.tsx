import { Tr, Td, Icon, Link } from '@chakra-ui/react';
import { GoStar, GoRepoForked } from 'react-icons/go';
import { SearchNode } from '../../../types/search';
import { BiLinkExternal } from 'react-icons/bi';

type RowProps = {
  data: SearchNode;
};

export default function Row({ data }: RowProps) {
  return (
    <Tr>
      <Td>
        {data.url ? (
          <Link href={data.url} isExternal>
            {data.name} <Icon as={BiLinkExternal} mx="2px" w={3} h={3} />
          </Link>
        ) : (
          data.name
        )}
      </Td>
      <Td>
        <Icon as={GoStar} /> {data.stargazerCount.toLocaleString()}
      </Td>
      <Td>
        <Icon as={GoRepoForked} /> {data.forkCount.toLocaleString()}
      </Td>
    </Tr>
  );
}
