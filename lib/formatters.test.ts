import { describe, it, expect } from "vitest";
import { formatDate, formatRuntime, formatFullDate } from "./formatters";

describe("formatters", () => {
  describe("formatDate", () => {
    it("should format simple date", () => {
      expect(formatDate("10-10-2010")).toBe("Oct 10, 2010");
    })
  })

  describe("formatRuntime", () => {
    it("should convert from minutes to hours and minutes", () => {
      expect(formatRuntime(120)).toBe("2h 0m");
    })
  })

  describe("formatFullDate", () => {
    it("should format american date", () => {
      expect(formatFullDate("10-10-2025", "US")).toBe("10/10/2025 (US)")
    })
  })
  
})