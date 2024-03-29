import { Track } from "@spotify/web-api-ts-sdk";
import { ExtendedPlaylistPage } from "../customInterfaces";

export default function InThese({
    playlists,
    activeTrack,
}: {
    playlists: ExtendedPlaylistPage | null;
    activeTrack: Track | null;
}) {
    return (
        <div className="in-these-component">
            <h2>In These</h2>
            <p>
                Track: {activeTrack?.name ?? "-"}, Id: {activeTrack?.id ?? "-"}
            </p>
            <ul>
                {playlists?.allItems.map(playlist => (
                    <li key={playlist.id}>
                        <a href={playlist.external_urls.spotify}>
                            {playlist.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
