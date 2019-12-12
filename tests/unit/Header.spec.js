import { mount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('Header', () => {
    const wrapper = mount(Header)

    it("Renders correct date, year, month, weekday", () => {
        let today = new Date()
        //Check todays date
        //This line from a previous practical
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)

        //Check todays year
        let year = today.getFullYear()
        expect(wrapper.html()).toContain(year)
        
        //Check todays month
        let month = today.getMonth()
        let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        expect(wrapper.html()).toContain(monthNames[month])

        //Check todays weekday
        let weekDay = today.getDay()
        let dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
        expect(wrapper.html()).toContain(dayNames[weekDay])
        

    })
})