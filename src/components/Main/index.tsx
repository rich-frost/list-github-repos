import { useEffect, useState } from 'react';
import { Spinner, VStack, Center } from '@chakra-ui/react';
import Repositories from '../Repositories';
import Search from '../Search';
import { useQuery } from '@apollo/client';
import { DEFAULT_SEARCH, GRAPHQL_REACT_REPOS } from '../../constants';
import Error from '../Error';
import { SearchResults } from '../../types/search';

interface SearchData {
  search: SearchResults;
}

interface SearchVars {
  queryString: string;
}

export default function Main() {
  const [search, setSearch] = useState(DEFAULT_SEARCH);

  const { loading, data, error, refetch } = useQuery<SearchData, SearchVars>(
    GRAPHQL_REACT_REPOS,
    {
      variables: {
        queryString: `topic:${search}`,
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  return (
    <VStack spacing={4} align="stretch">
      <Search />
      <Center>
        {loading && <Spinner />}
        {error && <Error error={error.message} />}
      </Center>
      {!loading && !error && data && <Repositories />}
    </VStack>
  );
}
