import React, { useState } from "react";
// import { ArtistList } from "./ArtistList";
const AddArtistModal = ({
  showAddArtist,
  setShowAddArtist,
  artistList,
  setArtistList,
}) => {
  const [artistName, setArtistName] = useState("");
  const [artistNationality, setArtistNationality] = useState("");
  const [artistAge, setArtistAge] = useState("");

  console.log(artistList);

  const handleAddArtist = () => {
    // Create a new array with the updated values
    const updatedArtistList = [
      ...artistList,
      {
        name: artistName,
        nationality: artistNationality,
        age: artistAge,
      },
    ];

    // Update the artistList state with the new array
    setArtistList(updatedArtistList);

    // Reset state values
    setArtistName("");
    setArtistNationality("");
    setArtistAge("");
    setShowAddArtist(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-25 ${
        showAddArtist ? "" : "hidden"
      }`}
    >
      <div className="relative w-full max-w-md p-6 space-y-4 bg-white rounded-md shadow-lg">
        <h2 className="text-xl font-semibold">Add Artist</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              placeholder="Artist Name"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-semibold" htmlFor="nationality">
              Nationality
            </label>
            <input
              className="w-full p-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              id="nationality"
              type="text"
              placeholder="Nationality"
              value={artistNationality}
              onChange={(e) => setArtistNationality(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-semibold" htmlFor="age">
              Age
            </label>
            <input
              className="w-full p-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              id="age"
              type="number"
              placeholder="Age"
              value={artistAge}
              onChange={(e) => setArtistAge(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <button
            className="block w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-500"
            onClick={handleAddArtist}
          >
            Add Artist
          </button>
          <button
            className="block w-full px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-500"
            onClick={() => setShowAddArtist(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddArtistModal;
