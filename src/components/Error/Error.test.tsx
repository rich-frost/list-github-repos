import renderer from 'react-test-renderer';
import Error from './index';

describe('Error component', () => {
  it('renders the component', () => {
    const component = renderer.create(<Error />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the component with custom error', () => {
    const component = renderer.create(
      <Error error="The API failed to respond" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
