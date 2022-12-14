import renderer from 'react-test-renderer';
import Header from './index';

describe('Header component', () => {
  it('renders the component', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
