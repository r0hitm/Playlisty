import { Page, PlaylistedTrack, SimplifiedPlaylist, Track } from "@spotify/web-api-ts-sdk";

export interface ExtendedPlaylistPage extends Page<SimplifiedPlaylist> {
    allItems: SimplifiedPlaylist[];
}

export interface ExtendedPlaylistedTracks extends Page<PlaylistedTrack<Track>> {
    allItems: PlaylistedTrack<Track>[];
}