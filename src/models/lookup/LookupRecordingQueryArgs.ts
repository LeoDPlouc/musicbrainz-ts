interface LookupRecordingQueryArgs extends LookupQueryArgs {
    inc?: ("artists" | "releases" | "isrcs" | "url-rels")[]
}