import { useEffect, useState } from 'react';
import { Spinner, VStack, Center } from '@chakra-ui/react';
import Search from '../Search';
import { useQuery } from '@apollo/client';
import { DEFAULT_SEARCH, GRAPHQL_REACT_REPOS } from '../../constants';
import Error from '../Error';
import { SearchData, SearchVars } from '../../types/search';
import Results from '../Results';

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
    if (search === '') return;
    refetch();
  }, [search, refetch]);

  return (
    <VStack spacing={4} align="stretch" p={3}>
      <Search {...{ setSearch, search }} />
      {/* TODO improve this rendering logic, feels a bit messy */}
      <Center>
        {loading && <Spinner />}
        {error && <Error error={error.message} />}
      </Center>
      {!loading && !error && data && (
        <Results
          data={data?.search?.edges}
          count={data.search.repositoryCount}
          topic={search}
        />
      )}
    </VStack>
  );
}
