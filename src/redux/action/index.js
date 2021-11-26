export const getArtist = (artistId) => {
  return async (dispatch) => {
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
        dispatch({
          type: "GET_ARTIST",
          payload: artist,
        });

        // async () => {
        //   let tracksResponse = await fetch(
        //     "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        //       artist.name,
        //     {
        //       method: "GET",
        //       headers,
        //     }
        //   );

        //   if (tracksResponse.ok) {
        //     let tracklist = await tracksResponse.json();
        //     dispatch({
        //       type: "GET_TRACKS",
        //       payload: tracklist,
        //     });
        //     console.log("SONGS ::::::::::::::", this.state.songs);
        //   }
        // };
      }
    } catch (error) {
      console.log(error);
    }
  };
};
