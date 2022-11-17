import renderer from 'react-test-renderer';
import ResultsInfo from './index';

describe('ResultsInfo component', () => {
  it('renders the component', () => {
    const component = renderer.create(
      <ResultsInfo count={123} topic="React" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
