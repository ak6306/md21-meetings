import React from 'react';
import ReactDOM from 'react-dom';
import Table from "./../Table";
import {render, cleanup} from "@testing-library/react";

import renderer from 'react-test-renderer';
afterEach(cleanup);

it("renders properly", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Table></Table>, div)
})

// it("renders button correctly", ()=>{
//     const {getByTestId} = render(<Table></Table>)
//     expect(getByTestId("table")).toHaveAttribute("width");
// })

it('matches snapshot', ()=>{
    const tree = renderer.create(<Table></Table>).toJSON();
    expect(tree).toMatchSnapshot();
})