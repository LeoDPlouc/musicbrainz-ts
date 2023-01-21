interface Artist {
    id: string
    name: string
    "sort-name": string
    disambiguation: string
    aliases?: Alias[]
    "begin-area"?: Area
    "release-groups"?: ReleaseGroup[]
    ipis?: string[]
    "end-area"?: Area
    isnis?: string[]
    annotation?: string
    type?: "Person" | "Group" | "Orchestra" | "Choir" | "Character" | "Other"
    rating?: Rating
    "life-span"?: LifeSpan
    country?: string
    recordings?: Recording[]
    releases?: Release[]
    genres?: Genre[]
    tags?: Tag[]
    area: Area
    works: Work[]
    gender?: string
}