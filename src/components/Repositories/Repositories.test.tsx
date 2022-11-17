import renderer from 'react-test-renderer';
import { SearchEdge } from '../../types/search';
import Repositories from './index';

describe('Repositories component', () => {
  const data: SearchEdge[] = [
    {
      node: {
        id: '123',
        name: 'React repo',
        stargazerCount: 100,
        forkCount: 240,
        url: 'google.com',
      },
    },
  ];

  it('renders with no data message', () => {
    const component = renderer.create(<Repositories data={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the component', () => {
    const component = renderer.create(<Repositories data={data} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
