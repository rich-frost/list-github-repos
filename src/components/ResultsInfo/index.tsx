import { Center, Text, Badge } from '@chakra-ui/react';

type ResultsInfoProps = {
  count: number;
  topic: string;
};

export default function ResultsInfo({ count, topic }: ResultsInfoProps) {
  const badgeColour = count > 0 ? 'green' : 'red';
  return (
    <Center p={2}>
      <Text>
        <Badge colorScheme={badgeColour}>{count.toLocaleString()}</Badge>{' '}
        respositories found for topic <Text as="b">{topic}</Text>
      </Text>
    </Center>
  );
}
