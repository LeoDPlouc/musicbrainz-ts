interface Recording {
    id: string
    title: string
    length: number
    video: boolean
    "artist-credit": ArtistCredit[]
    "first-release-date": string
    releases?: Release[]
    tags?: Tag[]
    disambiguation?: string
    isrcs?: string[]
}