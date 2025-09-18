import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ApplyForm from "../components/ApplyForm";
import { Talent } from "../types/talent";

const mockTalent: Talent = {
  id: "1",
  name: "John Doe",
  location: "New York",
  timezone: "EST",
  primarySkill: "Frontend",
  skills: ["React", "TypeScript"],
  yearsExperience: 5,
  availabilityHrsPerWeek: 40,
  rateUsdPerHour: 85,
  rating: 4.8,
  verified: true,
  lastActive: "2025-01-15T10:30:00Z",
  bio: "Full-stack developer",
  tags: ["React", "Frontend"],
};

describe("ApplyForm", () => {
  it("renders the form with talent name", () => {
    const mockOnBack = vi.fn();
    const { getByText, getByLabelText } = render(
      <ApplyForm talent={mockTalent} onBack={mockOnBack} />
    );

    expect(getByText("Connect with John Doe")).toBeInTheDocument();
    expect(getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Email Address/i)).toBeInTheDocument();
  });

  it("calls onBack when back button is clicked", () => {
    const mockOnBack = vi.fn();
    const { getByText } = render(
      <ApplyForm talent={mockTalent} onBack={mockOnBack} />
    );

    getByText("Back to Talents").click();
    expect(mockOnBack).toHaveBeenCalled();
  });
});
