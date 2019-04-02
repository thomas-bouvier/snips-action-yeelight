import { Handler } from './index'
import { yeeFactory, i18nFactory } from '../factories'

export const turnOnHandler: Handler = async function (msg, flow) {
    const i18n = i18nFactory.get()

    yeeFactory.get().set_power('on')

    flow.end()
    return i18n('turnOn.updated')
}
