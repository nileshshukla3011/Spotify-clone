import axios from 'axios';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider'

const Playlists = () => {
    const [{ token,playlists }, dispatch] = useStateProvider();

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists ", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
            // console.log(response)
            // console.log(response.data.items)
            const {items} = response.data ;
            const playlists = items.map(({name,id})=>{
                return { name, id};
            })
            // console.log( playlists)
            dispatch({type: reducerCases.SET_PLAYLISTS, playlists});
        }
        getPlaylistData();
    }, [token, dispatch])

    return (
        <Container>
            <ul>
                {playlists.map(({name, id })=>{
                    return <li key={id} >{name}</li>
                })}
            </ul>
        </Container>
    )
}

export default Playlists


const Container = styled.div` 
height: 100%;
overflow: hidden;
ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 45vh;
    max-height: 100%;
    overflow: auto;
    &::webkit-scrollbar{
       width: 0.7 rem;
       &-thumb {
        background-color: rgba(255,255,255,0.6);
       }
    }
    li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: 0.4s ease-in-out;
      &:hover {
        color: white;
      }
    }

  }
`;