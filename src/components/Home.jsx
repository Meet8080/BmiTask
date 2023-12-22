import React, { useState } from "react";
import Artists from "./Artists";
import { ArtistList, SongList } from "../utils/ArtistList";
import Addartistmodal from "./Addartistmodal";
import { ArtistDetails } from "./ArtistDetails";

export const Home = () => {
  const [artistList, setArtistList] = useState(ArtistList);
  const [selectedArtist, setSelectedArtist] = useState(ArtistList[0]);
  const [showAddArtist, setShowAddArtist] = useState(false);
  const handleSelectArtist = (artist) => {
    setSelectedArtist(artist);
  };
  const selectedArtistSongs = SongList.filter(
    (song) => song.artistId === selectedArtist.id
  );
  const handleRemoveArtist = () => {
    // Filter out the selected artist from the ArtistList
    const updatedArtistList = artistList.filter(
      (artist) => artist.name !== selectedArtist.name
    );

    // Update the state with the new artist list and select the first artist (if any)
    setArtistList(updatedArtistList);
    setSelectedArtist(
      updatedArtistList.length > 0 ? updatedArtistList[0] : null
    );
  };

  return (
    <div className="w-full flex flex-col justify-center scroll-smooth ">
      <div className="w-full flex justify-start items-start p-10 gap-10">
        <div className="w-1/4 ml-4 px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 border border-black max-h-screen overflow-auto">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Artist List</h1>
            <Artists
              artistList={artistList}
              handleSelectArtist={handleSelectArtist}
              selectedArtist={selectedArtist}
            />
            <div className="mt-6 space-y-4">
              <button
                className="block w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-500"
                onClick={() => setShowAddArtist(true)}
              >
                Add Artist
              </button>
              <button
                className="block w-full px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-500"
                onClick={handleRemoveArtist}
              >
                Remove Artist
              </button>
            </div>
          </div>
        </div>
        {showAddArtist && (
          <Addartistmodal
            showAddArtist={showAddArtist}
            setShowAddArtist={setShowAddArtist}
            artistList={artistList}
            setArtistList={setArtistList}
          />
        )}
        <div className="w-full">
          <ArtistDetails
            selectedArtistSongs={selectedArtistSongs}
            selectedArtist={selectedArtist}
          />
        </div>
      </div>
    </div>
  );
};
