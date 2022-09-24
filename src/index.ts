import { searchRecordingRequest } from "./requests"

export class MusicBrainzApi {
    private useragent: string

    constructor(appName: string, appVersion: string, contactLink: string) {
        this.useragent = `${appName}/${appVersion} (${contactLink})`
    }

    private buildQuery(queryArgs: SearchQueryArgs) {
        return Object.keys(queryArgs)
            .map(k => `${String(k)}:${String(queryArgs[k as (keyof typeof queryArgs)])}`)
            .filter(param => param.split(':')[1] != "undefined")
            .join(" AND ")
    }

    public async searchRecording(queryArgs: SearchRecordingQueryArgs) {

        const query = this.buildQuery(queryArgs)
        return await searchRecordingRequest(query, this.useragent)
    }
}