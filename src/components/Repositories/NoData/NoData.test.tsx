import renderer from 'react-test-renderer';
import NoData from './index';
import { Table, Tr } from '@chakra-ui/react';

describe('NoData component', () => {
  it('renders the component', () => {
    const component = renderer.create(
      <Table>
        <Tr>
          <NoData />
        </Tr>
      </Table>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
