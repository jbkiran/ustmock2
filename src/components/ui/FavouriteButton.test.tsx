import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import FavouriteButton from "./FavouriteButton";

describe("FavouriteButton", () => {
  it("renders filled heart (GoHeartFill) when isFavourite is true and calls toggleFavourite on click", () => {
    const toggle = vi.fn();
    render(<FavouriteButton isFavourite={true} toggleFavourite={toggle} />);

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    const svg = btn.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("text-red-500");

    fireEvent.click(btn);
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  it("renders outline heart (GoHeart) when isFavourite is false and calls toggleFavourite on click", () => {
    const toggle = vi.fn();
    render(<FavouriteButton isFavourite={false} toggleFavourite={toggle} />);

    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();

    const svg = btn.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).not.toHaveClass("text-red-500");

    fireEvent.click(btn);
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});
