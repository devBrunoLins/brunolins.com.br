export class apiResources {
    public static rest = {
        linswebapi: {
            endpointBase: '/v1',
            resources: {
                getUser: '/users',
                getHistoryActivity: '/get-history-activity',
                setHistoryActivity: '/set-history-activity'
            }
        },

        // otherAPI: {
        //     endpointBase: '/other-svc/v2',
        //     resources: {
        //         paramsIntoString: (params) => `/get-holidays/date/${params[0]}/currency/${params[1]}/country/${params[2]}`,
        //     }
        // }
    };
}
