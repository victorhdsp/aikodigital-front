import { describe, test, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "./index.vue";

describe("components/header", () => {
  test("renders correctly", async () => {
    const wrapper = await mountSuspended(Header);

    // expect(wrapper.html()).toMatchSnapshot();
    
    const logo = wrapper.find(".logo");
    const logoImg = logo.find("img");
    
    expect(logo.attributes("href")).toBe("/");
    expect(logoImg.attributes("src")).toContain("/aiko.png");
  });
});