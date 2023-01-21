import { lookupArtistRequest, lookupRecordingRequest, lookupReleaseRequest, searchRecordingRequest } from "./requests"

export class MusicBrainzApi {
    private useragent: string

    constructor(appName: string, appVersion: string, contactLink: string) {
        this.useragent = `${appName}/${appVersion} (${contactLink})`
    }

    private buildSearchQuery(queryArgs: SearchQueryArgs): string {
        return Object.keys(queryArgs)
            .map(k => `${String(k)}:${String(queryArgs[k as (keyof typeof queryArgs)])}`)
            .filter(param => param.split(':')[1] != "undefined")
            .join(" AND ")
    }

    public async searchRecording(queryArgs: SearchRecordingQueryArgs): Promise<RecordingSearchResults> {
        const query = this.buildSearchQuery(queryArgs)

        return await searchRecordingRequest(query, this.useragent)
    }

    private buildLookupQuery(queryArgs: LookupQueryArgs): string {
        let query = queryArgs.mbid
        if (queryArgs.inc) {
            query += "?inc=" + queryArgs.inc.join("+")
        }
        return query

    }

    public async lookupRecording(queryArgs: LookupRecordingQueryArgs): Promise<Recording> {
        const query = this.buildLookupQuery(queryArgs)

        return await lookupRecordingRequest(query, this.useragent)
    }

    public async lookupRelease(queryArgs: LookupReleaseQueryArgs): Promise<Release> {
        const query = this.buildLookupQuery(queryArgs)

        return await lookupReleaseRequest(query, this.useragent)
    }

    public async lookupArtist(queryArgs: LookupArtistQueryArgs): Promise<Artist> {
        const query = this.buildLookupQuery(queryArgs)

        return await lookupArtistRequest(query, this.useragent)
    }
}