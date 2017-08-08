// Generated by dts-bundle v0.7.3



/**
    * Mixpanel Engine Wrapper
    */
class Mixpanel {
        _eng: any;
        distinct_id: string;
        /**
            * @constructor
            * @param  {string} token
            */
        constructor(token: string);
        /**
            * @param  {string} userId
            */
        identify(userId: string): void;
        getMixpanel(): any;
        /**
            * @param  {number|string} userId
            */
        alias(userId: number | string): void;
        /**
            * @param  {string} ev
            * @param  {} props={}
            */
        track(ev: string, props?: {}): void;
}
export { Mixpanel };

class Mock {
    uniqIdentifier: number;
    customIdentifier: number | string;
    mapIdentifiers: {};
    listEvents: any[];
    name: string;
    seed: number;
    constructor();
    identify(userId: number | string): void;
    alias(userId: number | string): void;
    track(ev: any, props: any): void;
}
export { Mock };

type analytics_engine = "mixpanel" | "";
/**
    * Constructor define which engine you will use
    * @param  {analytics_engine} eng Enum of avaliable engine
    */
class AnalyticsAdapter {
        engine: any;
        isIdentified: boolean;
        constructor(eng: analytics_engine, tk?: string);
        /**
            * identify - Identify an user when he makes a signup or login
            * @param {int}     userId                  - Id to identify the use
            * @param {boolean} previous_identified     - (Optional) Pass true if user have signed up already
            */
        identify(userId: number | string, previous_identified?: boolean): void;
        /** track - Emit track events to the engine
            * @param {string} event - Id event
            * @param {object} props - Properties of the event
            */
        track(event: any, props?: {}): void;
}
export default AnalyticsAdapter;
export { analytics_engine, AnalyticsAdapter };

function seededRand(seed: any, max?: number, min?: number): number;
export { seededRand };
