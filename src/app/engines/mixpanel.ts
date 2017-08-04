import mixpanel from 'mixpanel-browser'
// console.log(mixpanel)

class Mixpanel {

    eng =  mixpanel
    distinct_id: string

    constructor(token:string) {
        // Create a Mixpanel Object
        this.eng.init(token)
        // console.log(mixpanel)
    }


    identify(userId: string) {
        // Find on a list of identifiers
        this.eng.identify(userId)
    }


    getMixpanel() {
        return this.eng
    }


    alias(userId: number|string) {
        // Save alias to a uniqIdentifier
        this.eng.alias(userId)
    }


    track(ev:string, props = {}) {
        // Track an event
        this.eng.track(ev, props)
    }
}

export default Mixpanel