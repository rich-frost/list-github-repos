import renderer from 'react-test-renderer';
import Search from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Search component', () => {
  it('renders the component', () => {
    const setSearch = jest.fn();
    const component = renderer.create(
      <Search search="" setSearch={setSearch} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the component with populated input', () => {
    const setSearch = jest.fn();
    const component = renderer.create(
      <Search search="" setSearch={setSearch} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls setSearch callback on input change', async () => {
    const searchParam = 'golang';
    const setSearch = jest.fn();
    const { container } = render(<Search search="" setSearch={setSearch} />);

    const input = await container.getElementsByClassName('chakra-input')[0];

    fireEvent.change(input, { target: { value: searchParam } });

    expect(setSearch).toHaveBeenCalledTimes(1);
    expect(setSearch).toHaveBeenCalledWith(searchParam);
  });
});
