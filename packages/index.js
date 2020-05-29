// 整个包得入口文件
import button from './button'
import dialog from './dialog'
import formItem from './form-item'
import form from './form'
import input from './input'
import radioGroup from './radio-group'
import radio from './radio'
import Switch from './switch'
import './fonts/font.scss'

const components = [
    button,
    dialog,
    formItem,
    form,
    input,
    radioGroup,
    radio,
    Switch
]

const install = function(Vue) {
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
    
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}