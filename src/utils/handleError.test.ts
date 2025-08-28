import { describe, it, expect } from "vitest";
import { handleError } from "./handleError";

describe("handleError", () => {
  it("return error message when error is instance of Error", () => {
    const result = handleError(new Error("Test error"));
    expect(result).toBe("Test error");
  });
});
