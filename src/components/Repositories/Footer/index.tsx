import { Tr, Td, Tfoot, Text, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Tfoot>
      <Tr>
        <Td colSpan={3}>
          <Flex justify="flex-end">
            <Text as="i">
              Showing top 10 GitHub repos for topic, sorted by best match
            </Text>
          </Flex>
        </Td>
      </Tr>
    </Tfoot>
  );
}
