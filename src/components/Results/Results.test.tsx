import renderer from 'react-test-renderer';
import { SearchEdge } from '../../types/search';
import Results from './index';

describe('Results component', () => {
  it('renders the component', () => {
    const data: SearchEdge[] = [
      {
        node: {
          id: '123',
          url: 'googl.com',
          name: 'React repo',
          stargazerCount: 201,
          forkCount: 214,
        },
      },
    ];
    const component = renderer.create(
      <Results count={123} topic="React" data={data} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
