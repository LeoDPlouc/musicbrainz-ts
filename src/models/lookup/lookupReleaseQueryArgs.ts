interface LookupReleaseQueryArgs extends LookupQueryArgs {
    inc?: ("artists" | "collections" | "labels" | "recordings" | "release-groups" | incRelationships)[]
}