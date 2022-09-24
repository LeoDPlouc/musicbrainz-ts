import axios from "axios"

let apiUrl = "https://musicbrainz.org/ws/2/"

export async function searchRecordingRequest(query: string, useragent: string): Promise<RecordingSearchResults> {
    let url = encodeURI(`${apiUrl}recording?query=${query}`)
    const res = await axios.get(url, { headers: { useragent: useragent, accept: "application/json" } })

    return res.data
}