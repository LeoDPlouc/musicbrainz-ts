import axios from "axios"

let apiUrl = "https://musicbrainz.org/ws/2/"

export async function searchRecordingRequest(query: string, useragent: string): Promise<RecordingSearchResults> {
    const res = await axios.get(`${apiUrl}recording?query=${query}`, { headers: { useragent: useragent, accept: "application/json" } })

    return res.data
}