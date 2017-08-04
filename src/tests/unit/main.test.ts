import Mixpanel from '../../app/engines/mixpanel'
import mixpanel from 'mixpanel-browser'
import { AnalyticsAdapter, analytics_engine } from "../../app/"


const setup = (engine:analytics_engine = "", token:string = "") => {
    return new AnalyticsAdapter(engine, token)
}


test("Test if the analytics is been setted with mock", () => {
    const analytics =  setup()
    expect(analytics.engine.name).toBe("Mock")
})


test("Try to identify a user on signup (alias)", () => {
    const analytics =  setup()
    analytics.identify("malucodoido")
    expect(analytics.engine.customIdentifier).toBe("malucodoido")
})


test("Try to identify a user on signup (alias) with empty string", () => {
    const analytics =  setup()
    expect(() => { analytics.identify("") } ).toThrow("Empty userId!")
})


test("Try to identify a user on login (identify)", () => {
    const analytics =  setup()

    analytics.identify("malucodoido")
    let malucodoido = analytics.engine.uniqIdentifier

    analytics.identify("jovenal")
    let jovenal = analytics.engine.uniqIdentifier

    expect(analytics.engine.uniqIdentifier).not.toBe(malucodoido)
    expect(analytics.engine.uniqIdentifier).toBe(jovenal)

    analytics.identify("malucodoido", true)
    expect(analytics.engine.uniqIdentifier).toBe(malucodoido)
    expect(analytics.engine.mapIdentifiers).toEqual({malucodoido, jovenal})
})


test("Try to track an event (track)", () => {
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


test("Try to create an adapter with error", () => {
    expect(() => {new AnalyticsAdapter()}).toThrow("Error on load analytic engine!")
    expect(() => {new AnalyticsAdapter("0")}).toThrow("Error on load analytic engine!")
})


test("Try to identify an user with error", () => {

    const test = () => {
        const analytic = new AnalyticsAdapter("")
        analytic.identify("zé ruela", true)
    }

    expect(test).toThrow("Alias not created yet!")
})


test("Init mixpanel without token", () => {
    const test = () => {
        const analytics = setup("mixpanel")
    }

    expect(test).toThrow("You need a token!")
})


test("Init mixpanel currectly", () => {
    const tk = "ASDAS"
    // const analytics = setup("mixpanel", tk)
    console.log(mixpanel)
    console.log(typeof mixpanel)
    // expect(analytics.engine).toEqual(new Mixpanel(tk))
})


adasd


