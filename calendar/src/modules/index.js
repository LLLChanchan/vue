
import CalendarMain from '../components/calendarMain.vue'
import { mergeOptions } from './util'
import   '../css/style.scss'
import '../css/calendar.scss'



let Calendar = {};


Calendar.install = function (Vue) {

    let t = new Date();

    Vue.prototype.$calendar = {}

    let  CalendarMainCom = Vue.extend(CalendarMain)

    let instance = new CalendarMainCom({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el);

    Vue.prototype.$calendar.show  = (settings={})=>{
        instance.show = true;

        mergeOptions(instance, settings)

        console.log(instance)

    }
    Vue.prototype.$calendar.hide  = ()=>{
        instance.show = false
    }

    Vue.prototype.$calendar.getDate  = ()=>{
        return {
            year:instance.year||(new Date).getFullYear(),
            month:instance.month||((new Date).getMonth()+1),
            day:instance.day||(new Date).getDay()
        }
    }







}
export  default Calendar

