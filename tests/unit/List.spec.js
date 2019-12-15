import {mount} from '@vue/test-utils'
import List from '../../src/components/List.vue'

describe('List', () => {
    const testData = [];

    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    });

    it('Displays correct text when no items in list', () => {
        expect(wrapper.html()).toContain('Add your first Todo task')
    })
});