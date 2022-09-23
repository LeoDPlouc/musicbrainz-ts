interface Release {
    id: string
    "status-id": string
    count: number
    title: string
    status: string
    "artist-credit": ArtistCredit[]
    "release-group": ReleaseGroup
    date: string
    country: string
    "release-events": ReleaseEvent[]
    "track-count": number
    media: Medium[]
    
}