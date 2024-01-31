import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should find item after being fetched", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should find items after being fetched", async () => {
    render(<MockFollowersList />);
    const followersDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followersDivElement.length).toBe(5);
  });
});
