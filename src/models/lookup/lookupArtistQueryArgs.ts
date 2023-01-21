interface LookupArtistQueryArgs extends LookupQueryArgs {
    inc?: ("recordings" | "releases" | "release-groups" | "works" | incRelationships)[]
}