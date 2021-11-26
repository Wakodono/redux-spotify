import React from "react";
import { useState, useEffect } from "react";

export default function getArtist (artistId) {
  const [artist, setArtist] = useState([]);
  const [song, setSong] = useState([]);

  return async (dispatch, getState) => {
    let artistId = props.match.params.id;

    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();
        setArtist(
          {
            artist,
          },

          async () => {
            let tracksResponse = await fetch(
              "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                artist.name,
              {
                method: "GET",
                headers,
              }
            );

            if (tracksResponse.ok) {
              let tracklist = await tracksResponse.json();
              setSong({ songs: tracklist.data });
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// const getAllAlbums = (albums) => {
//   return {
//     type: "GET_ALL_ALBUMS",
//     playload: albums,
//   };
// };

// const fetchAlbums = () => {
//     return (dispatch) => {
//         dispatch(getAllAlbums)

// fetcher("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",).then(res) {}
// }
// const getSingleAlbums = (album) => {
//     return {
//       type: "GET_S_ALBUMS",
//       playload: album,
//     };
//   };
