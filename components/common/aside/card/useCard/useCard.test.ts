import { describe, test, expect } from "vitest";
import { onMouseEnter, onMouseLeave } from "./index";

describe("components/common/aside/card/useCard", () => {
    test("onMouseEnter", () => {
        const mockMouseEnter = onMouseEnter("1");
        expect(mockMouseEnter).toBeUndefined();
    });

    test("onMouseLeave", () => {
        const mockMouseLeave = onMouseLeave();
        expect(mockMouseLeave).toBeUndefined();
    });
});