import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header be clicked`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        offers={[
          `Private Luxurious house gardenview`,
          `Cosy Studio, with outdoor Swimming`
        ]}
        onHeaderClick={onHeaderClick}
      />
  );

  const headers = main.find(`h2.place-card__name`);

  headers.forEach((header) => header.props().onClick());

  expect(onHeaderClick.mock.calls.length).toBe(headers.length);
});
