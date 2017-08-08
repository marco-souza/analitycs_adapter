import mixpanel from "mixpanel-browser"
import _ from "lodash"


/**
 * Mixpanel Engine Wrapper
 */
class Mixpanel {

    _eng =  mixpanel
    distinct_id: string

    /**
     * @constructor
     * @param  {string} token
     */
    constructor(token:string) {
        // Create a Mixpanel Object
        this._eng.init(token)
        // console.log(mixpanel)
    }

    /**
     * @param  {string} userId
     */
    identify(userId: string) {
        this._eng.identify(userId)
    }


    getMixpanel() {
        return this._eng
    }

    /**
     * @param  {number|string} userId
     */
    alias(userId: number|string) {
        // Save alias to a uniqIdentifier
        this._eng.alias(userId)
    }

    /**
     * @param  {string} ev
     * @param  {} props={}
     */
    track(ev:string, props = {}) {
        // Track an event
        this._eng.track(ev, props)
    }
}

export { Mixpanel }