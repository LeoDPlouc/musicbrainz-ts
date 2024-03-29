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

export async function lookupReleaseRequest(query: string, useragent: string): Promise<Release> {
    let url = encodeURI(`${apiUrl}release/${query}`)

    const res = await queueRequest(url, buildHeader(useragent))

    return res.data
}

export async function lookupArtistRequest(query: string, useragent: string): Promise<Artist> {
    let url = encodeURI(`${apiUrl}artist/${query}`)

    const res = await queueRequest(url, buildHeader(useragent))

    return res.data
}