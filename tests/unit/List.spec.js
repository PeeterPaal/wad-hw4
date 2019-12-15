import {mount} from '@vue/test-utils'
import List from '../../src/components/List.vue'

describe('List', () => {
    it('Displays correct text when no items in list', () => {
        const testData = [];

        const wrapper = mount(List, {
            propsData: {
                list: testData
            }
        });
        expect(wrapper.html()).toContain('Add your first Todo task')
    });

    it("After updating to 'done' wrapper item prop is truthy", () => {
        const testData = [
            {
                title: 'Study for exam',
                done: false
            },
            {
                title: 'Go to the gym',
                done: false
            },
            {
                title: 'Read 50 pages',
                done: true
            }];

        const wrapper = mount(List, {
            propsData: {
                list: testData
            }
        });

        const listItems = wrapper.findAll('div.list-item');
        expect(listItems.length).toBe(3);

        expect(listItems.at(0).text()).toBe('Study for exam');
        expect(Object.values(wrapper.props())[0].find(listitem => {
            return listitem.title === 'Study for exam';
        }).done).toBeFalsy();

        expect(listItems.at(1).text()).toBe('Go to the gym');
        expect(Object.values(wrapper.props())[0].find(listitem => {
            return listitem.title === 'Go to the gym';
        }).done).toBeFalsy();

        expect(listItems.at(2).text()).toBe('Read 50 pages');
        expect(Object.values(wrapper.props())[0].find(listitem => {
            return listitem.title === 'Read 50 pages';
        }).done).toBeTruthy();


        listItems.at(0).find('span').trigger('click');
        expect(Object.values(wrapper.props())[0].find(listitem => {
            return listitem.title === 'Study for exam';
        }).done).toBeTruthy();
        expect(wrapper.props().list[0].done).toBeTruthy();
    });
});