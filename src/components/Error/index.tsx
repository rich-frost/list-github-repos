import { Text } from '@chakra-ui/react';

type ErrorProps = {
  error: string;
};

export default function Error({ error }: ErrorProps) {
  return <Text color="tomato">An error occured: {error}</Text>;
}
