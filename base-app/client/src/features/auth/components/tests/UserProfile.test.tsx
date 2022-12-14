import { render, screen } from "@testing-library/react";

import { UserProfile } from "../UserProfile";

test("Greet the user", () => {
  render(<UserProfile />);
  expect(screen.getByText(/hi/i)).toBeInTheDocument();
});
