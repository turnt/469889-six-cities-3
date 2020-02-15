import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`<App /> is rendered correctly`, () => {
  const tree = renderer
    .create(<App
      offers={[
        `Private Luxurious house gardenview`,
        `Cosy Studio, with outdoor Swimming`
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
