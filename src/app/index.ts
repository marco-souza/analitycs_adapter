import Mock from "./engines/mock"
import Mixpanel from "./engines/mixpanel"

type analytics_engine = "mixpanel" | ""

/**
 * Constructor define which engine you will use
 * @param  {analytics_engine} eng Enum of avaliable engine
 */
class AnalyticsAdapter {

    engine: any
    isIdentified: boolean = false

    constructor(eng: analytics_engine, tk:string = "") {
        // Load the engine
        switch(eng) {
            case "mixpanel":
                if (tk == "") throw("You need a token!")
                this.engine = new Mixpanel(tk)
                break
            case "":
                this.engine = new Mock()
                break
            default:
                throw("Error on load analytic engine!")
        }
    }


    /**
     * identify - Identify an user when he makes a signup or login
     * @param {int}     userId                  - Id to identify the use
     * @param {boolean} previous_identified     - (Optional) Pass true if user have signed up already
     */
    identify(userId: number|string, previous_identified: boolean = false) {

        if (!userId) throw "Empty userId!"

        if (previous_identified) {
            this.engine.identify(userId)
        } else {
            this.engine.alias(userId)
        }
    }


    /** track - Emit track events to the engine
     * @param {string} event - Id event
     * @param {object} props - Properties of the event
     */
    track(event, props = {}) {
        this.engine.track(event, props)
    }


}

export {
    AnalyticsAdapter,
    analytics_engine
}

export default AnalyticsAdapter
