# Musicbrainz-ts
A wrapper for the MusicBrainz api, completely compatabile with typescript programming

## Get started

```typescript
import { MusicBrainzApi } from "musicbrainz-ts";

const api = new MusicBrainzApi("myApp", "1.0.0", "my.contact@email.com")
```

Create a new instance of musicbrainzApi with the name of your app, its version and a link to contact you (email, social media, website, etc)

## Search

### Recording

```typescript
let recordingSearchResult = await api.searchRecording({queryObject})
```

[Query object doc](https://musicbrainz.org/doc/MusicBrainz_API/Search#Recording)