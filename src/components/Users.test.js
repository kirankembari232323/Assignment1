import { render, fireEvent, screen } from "@testing-library/react";
import Users from "./Users";

//test block
test("User component", () => {
    // render the component on virtual dom
    render(<Users />)
});