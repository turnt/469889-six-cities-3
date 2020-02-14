import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`<Main /> is rendered correctly`, () => {
  const tree = renderer
    .create(<Main
      offers={[
        `Private Luxurious house gardenview`,
        `Cosy Studio, with outdoor Swimming`
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
