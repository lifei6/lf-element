import { describe, it, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Button.vue";

describe("Button.vue", () => {
  // const onClick = vi.fn();
  test("basic button", () => {
    const wrapper = mount(() => <Button type="primary">button content</Button>);

    // class
    expect(wrapper.classes()).toContain("lf-button--primary");

    // slot
    expect(wrapper.get("button").text()).toBe("button content");

    // events
    // await wrapper.get("button").trigger("click");
    // expect(onClick).toHaveBeenCalledOnce();
  });
});
