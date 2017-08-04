//
import { seededRand } from "../utils"

class Mock {

    uniqIdentifier: number
    customIdentifier: number|string
    mapIdentifiers = {}
    listEvents = []
    name = "Mock"
    seed = 0

    constructor () {
        // this.uniqIdentifier = Math.floor(Math.random() * 10000)
    }

    identify(userId: number|string) {
        // Find on a list of identifiers
        for (let i in this.mapIdentifiers) {
            if(i == userId) {
                this.customIdentifier = userId
                this.uniqIdentifier = this.mapIdentifiers[i]
                return
            }
        }
        throw "Alias not created yet!"
    }


    alias(userId: number|string) {

        this.uniqIdentifier = seededRand(this.seed++)
        this.customIdentifier = userId

        // Save alias to a uniqIdentifier
        this.mapIdentifiers[userId] = this.uniqIdentifier
    }


    track(ev, props) {
        let newEvent = {
            "event": ev,
            ...props
        }
        this.listEvents.push( JSON.stringify(newEvent) )
    }
}

export default Mock
