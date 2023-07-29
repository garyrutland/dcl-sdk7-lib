import * as utils from '@dcl-sdk/utils'

export class Test {
    constructor() {
        console.log('test constructor - before timeout')

        utils.timers.setTimeout(() => console.log('timer done'), 1000)

        console.log('test constructor - after timeout')
    }
}
