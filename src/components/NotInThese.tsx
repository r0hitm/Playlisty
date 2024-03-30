import { useEffect, useState } from "react";
import { PlaylistTracks } from "../customInterfaces";
import PlaylistItem from "./PlaylistItem";

export default function NotInThese({
    playlistTracks,
    activeTrack,
}: {
    playlistTracks: PlaylistTracks[] | null;
    activeTrack: string | null;
}) {
    const [notInThese, setNotInThese] = useState<string[]>([]);

    useEffect(() => {
        if (!playlistTracks || !activeTrack) {
            return;
        }

        const notInThese: string[] = [];
        playlistTracks.forEach(playlist => {
            if (
                !playlist.tracks.allItems.some(
                    track => track.track.id === activeTrack
                )
            ) {
                notInThese.push(playlist.name);
            }
        });

        setNotInThese(notInThese);

        return () => {
            setNotInThese([]);
        };
    }, [activeTrack]);

    return (
        <div className="not-in-these-component">
            <h2>NOT In Playlists</h2>
            <ul>
                {notInThese.map((playlistName, i) => (
                    <li key={playlistName} className="playlist-item-wrapper">
                        <span>{i + 1}. </span>
                        <PlaylistItem title={playlistName} addBtn={true} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
