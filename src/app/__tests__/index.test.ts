import {Mixpanel} from '../../app/engines/mixpanel'
import {Mock} from '../../app/engines/mock'
import mixpanel from 'mixpanel-browser'
import {describe, it } from 'mocha'
import { expect } from 'chai'
import AnalyticsAdapter,{ analytics_engine } from "../../app/"


const setup = (engine:analytics_engine = "", token:string = "") => {
    let instance = new AnalyticsAdapter(engine, token)
    instance.engine = new Mock()
    return instance
}

describe("Test AnalyticsAdapter", ()=>{

    it("Test if the analytics is been setted with mock", () => {
        const analytics =  setup()
        expect(analytics.engine.name).to.be("Mock")
    })


    it("Try to identify a user on signup (alias)", () => {
        const analytics =  setup()
        analytics.identify("malucodoido")
        expect(analytics.engine.customIdentifier).to.be("malucodoido")
    })


    it("Try to identify a user on signup (alias) with empty string", () => {
        const analytics =  setup()
        expect(() => { analytics.identify("") } ).to.throw("Empty userId!")
    })


    it("Try to identify a user on login (identify)", () => {
        const analytics =  setup()

        analytics.identify("malucodoido")
        let malucodoido = analytics.engine.uniqIdentifier

        analytics.identify("jovenal")
        let jovenal = analytics.engine.uniqIdentifier

        expect(analytics.engine.uniqIdentifier).not.to.be(malucodoido)
        expect(analytics.engine.uniqIdentifier).to.be(jovenal)

        analytics.identify("malucodoido", true)
        expect(analytics.engine.uniqIdentifier).to.be(malucodoido)
        expect(analytics.engine.mapIdentifiers).toEqual({malucodoido, jovenal})
    })


    it("Try to track an event (track)", () => {
        const
            analytics =  setup(),
            event = "pulo do gato",
            props = {
                count: 8
            },
            item = JSON.stringify({event, ...props})

        analytics.track(event, props)
        analytics.track(event, props)

        expect(analytics.engine.listEvents).toEqual(
            [item, item]
        )
    })


    it("Try to create an adapter with error", () => {
        // expect(() => {new AnalyticsAdapter()}).to.throw("Error on load analytic engine!")
        // expect(() => {new AnalyticsAdapter("0")}).to.throw("Error on load analytic engine!")
    })


    it("Try to identify an user with error", () => {

        const test = () => {
            const analytic = new AnalyticsAdapter("")
            analytic.identify("zé ruela", true)
        }

        expect(test).to.throw("Alias not created yet!")
    })


    it("Init mixpanel without token", () => {
        const test = () => {
            const analytics = setup("mixpanel")
        }

        expect(test).to.throw("You need a token!")
    })
})

