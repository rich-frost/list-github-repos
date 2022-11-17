import renderer from 'react-test-renderer';
import Row from './index';
import { Table, Tr } from '@chakra-ui/react';

describe('Row component', () => {
  const data = {
    id: '123',
    name: 'React repo',
    stargazerCount: 100,
    forkCount: 240,
    url: 'google.com',
  };

  it('renders the component', () => {
    const component = renderer.create(
      <Table>
        <Tr>
          <Row data={data} />
        </Tr>
      </Table>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('formats large numbers appropriately', () => {
    const component = renderer.create(
      <Table>
        <Tr>
          <Row
            data={{ ...data, stargazerCount: 110023, forkCount: 629642297 }}
          />
        </Tr>
      </Table>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
