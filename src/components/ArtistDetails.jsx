import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArtistList, SongList } from "../utils/ArtistList";

export const ArtistDetails = ({ selectedArtist, selectedArtistSongs }) => {
  const { id } = useParams();

  // If selectedArtistSongs is empty, find matching songs from SongList
  if (!selectedArtistSongs || selectedArtistSongs.length === 0) {
    selectedArtistSongs = SongList.filter(
      (song) => song.artistId === parseInt(id)
    );
  }
  if (!selectedArtist || selectedArtist.length === 0) {
    selectedArtist = ArtistList.filter((artist) => artist.id === parseInt(id));
  }

  return (
    <div
      className={`${
        selectedArtist.name ? "w-full max-h-[90vh]" : "m-10"
      }  px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 border border-black overflow-auto`}
    >
      <div className="flex  justify-between items-center bg-gray-200 border border-black rounded-xl px-2">
        <h2 className="text-xl font-semibold">
          {selectedArtist.name || selectedArtist[0].name} Song Details:
        </h2>
        <p >
          {selectedArtist.name && (
            <div>
              <Link
                to={`/artist-details/${selectedArtist.id}`}
                className="px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-external-link"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
              </Link>
            </div>
          )}
        </p>
      </div>
      <h1 className="text-2xl font-semibold">Artist Details</h1>
      <div className="border rounded-3xl border-black mt-4 bg-gray-200 ">
        {selectedArtistSongs.map((song, index) => (
          <div key={index} className="p-2">
            <div className="w-full bg-white p-4 rounded-xl ">
              <h2 className="w-full text-xl  tracking-widest word-spacing-30 prose">
                Song title {index + 1} Lyrics:<br></br>
                {song.lyrics}
              </h2>
            </div>
            <div className=" rounded-xl mt-4 bg-white p-4">
              <h2 className="text-2xl font-semibold">
                Song title {index + 1} Details:<br></br>
              </h2>
              <p>Composer:{song.composer}</p>
              <p>Producer:{song.producer}</p>
              <p>Production Date:{song.productionDate}</p>
              <p>Awards:{song.awards}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
