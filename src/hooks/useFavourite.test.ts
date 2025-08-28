import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useFavourite } from "./useFavourite";

describe("useFavourite hook ", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initializes with empty favourites when no localStorage", () => {
    const { result } = renderHook(() => useFavourite());
    expect(result.current.favourite).toEqual([]);
  });

  it("adds a product to favourites", () => {
    const { result } = renderHook(() => useFavourite());
    act(() => {
      result.current.toggleFavourite(5);
    });
    expect(result.current.favourite).toContain(5);
    expect(result.current.isFavourite(5)).toBe(true);
  });

});
