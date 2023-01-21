interface Area {
    id: string
    name: string
    "sort-name": string
    "iso-3166-1-codes": string[]
    disambiguation: string
    type?: "Country" | "Subdivision" | "Country" | "Municipality"| "City" | "District" | "Island"
}