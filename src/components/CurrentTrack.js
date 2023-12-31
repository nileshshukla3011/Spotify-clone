import axios from 'axios';
import { useEffect } from 'react';
import styled from "styled-components"
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';

const CurrentTrack = () => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      })
      console.log("this one", response);
      if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        }
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      }
    };
    getCurrentTrack();
  }, [token, dispatch])
  return (
    <Container>{
      currentlyPlaying && (
        <div className='track' >
          <div className='track__image' >
            <img src={currentlyPlaying.image} alt="currentlyplaying" />
          </div>
          <div className='track__info' >
            <h4>{currentlyPlaying.name}</h4>
            <h6>{currentlyPlaying.artists.join(", ")}</h6>
          </div>
        </div>
      )
    }</Container>
  )
}

export default CurrentTrack;


const Container = styled.div`
.track{
  display: flex;
  align-items: center;
  // justify-content: center;
  gap: 1rem;
  .track__image {
    align-item: center;
    padding: 0 0rem;
    // margin: 1rem 0rem 1rem 0rem;
      margin-bottom: 1rem;
    // background-color: red;

  }
  &__info {
    display: flex;
    flex-direction: column;
    // gap: 0.2rem;
    h4 {
      color: white;
    }
    h6{
      color: #b3b3b3;
    }
  }
}

`;