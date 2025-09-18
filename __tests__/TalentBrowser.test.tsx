import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TalentBrowser from "../components/TalentBrowser";

// fake fetching fnx
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
) as never;

describe("TalentBrowser", () => {
  it("renders talent browser with search input", () => {
    const { getByPlaceholderText } = render(<TalentBrowser />);

    expect(
      getByPlaceholderText(/Search by name or skills/i)
    ).toBeInTheDocument();
  });

  it("shows loading spinner initially", () => {
    const { container } = render(<TalentBrowser />);

    expect(container.querySelector(".animate-spin")).toBeInTheDocument();
  });
});
