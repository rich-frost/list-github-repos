import renderer from 'react-test-renderer';
import Footer from './index';
import { Table } from '@chakra-ui/react';

describe('Footer component', () => {
  it('renders the component', () => {
    const component = renderer.create(
      <Table>
        <Footer />
      </Table>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
