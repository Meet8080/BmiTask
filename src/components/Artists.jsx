import React from "react";

const Artists = ({ artistList, handleSelectArtist, selectedArtist }) => {
  return (
    <ul className="mt-6 space-y-4">
      {artistList.map((artist) => (
        <div
          key={artist.name}
          className={`cursor-pointer rounded-md px-4 py-2 text-sm ${
            selectedArtist === artist ? "bg-green-100" : ""
          }`}
          onClick={() => handleSelectArtist(artist)}
        >
          <li>{artist.name}</li>
          <li>{artist.nationality}</li>
          <li>{artist.age}</li>
        </div>
      ))}
    </ul>
  );
};

export default Artists;
