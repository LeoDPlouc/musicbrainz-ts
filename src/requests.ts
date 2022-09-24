import { queueRequest } from "./requestDispatcher"

let apiUrl = "https://musicbrainz.org/ws/2/"

function buildHeader(useragent: string) {
    return { headers: { useragent: useragent, accept: "application/json" } }
}

export async function searchRecordingRequest(query: string, useragent: string): Promise<RecordingSearchResults> {
    let url = encodeURI(`${apiUrl}recording?query=${query}`)

    const res = await queueRequest(url, buildHeader(useragent))

    return res.data
}

export async function lookupRecordingRequest(query: string, useragent: string): Promise<Recording> {
    let url = encodeURI(`${apiUrl}recording/${query}`)

    const res = await queueRequest(url, buildHeader(useragent))

    return res.data
}