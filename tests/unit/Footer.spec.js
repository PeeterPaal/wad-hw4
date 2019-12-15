import Footer from "../../src/components/Footer";
import {mount} from "@vue/test-utils";

describe('Footer', () => {
    const wrapper = mount(Footer, {
        attachToDocument: true
    });
    const addItemButton = wrapper.find('span');

    it("Button is diplayed on load", () => {
        expect(addItemButton.exists()).toBeTruthy();
        expect(addItemButton.text()).toBe("+");
    });

    it("On button '+' click 'open' changes to 'true'", () => {
        expect(wrapper.vm.$data.open).toBeFalsy();
        addItemButton.trigger('click');
        expect(wrapper.vm.$data.open).toBeTruthy();
    });
});
