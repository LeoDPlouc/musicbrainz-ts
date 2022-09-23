interface Artist {
    id: string
    name: string
    "sort-name": string
    disambiguation: string
    aliases?: Alias[]
}