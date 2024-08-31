import { describe, test, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Button from "./index.vue";
import { Search } from "lucide-vue-next";

describe("components/common/button", () => {
  test("renders correctly", async () => {
    const wrapper = await mountSuspended(Button, {
        props: {
          to: "/",
          icon: Search,
          text: "Search",
          variant: "default",
          size: "sm",
        },
    });

    // expect(wrapper.html()).toMatchSnapshot();
    
    const buttonElement = wrapper.find("button");
    const textElement = wrapper.find("p");
    const hrefElement = wrapper.find("a");

    expect(buttonElement.classes()).toContain("bg-primary");
    expect(hrefElement.attributes("href")).toBe("/");
    expect(textElement.text()).toBe("Search");
  });
});