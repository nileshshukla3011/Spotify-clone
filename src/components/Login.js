import React from 'react'
import styled from 'styled-components'
const Login = () => {

    const clickHandler = () => {
        const clientId = "5bf5dc72a194477a820060d0fe56ba85";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = ["user-read-email",
            "user-read-private",
            "user-read-playback-state",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played",
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dailog=true`;
    }

    return (
        <Container>
            {/* <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='Spotify' /> */}
            <button onClick={clickHandler} >Connect Spotify</button>
        </Container>
    )
}

export default Login

const Container = styled.div`  
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
gap: 5rem;
background-image: url(${`https://www.teahub.io/photos/full/111-1110876_spotify-wallpaper.jpg`});
background-size: 100% 100% ;
background-position: center;
background-repeat: no-repeat;
// img {
//     height: 20vh;
// }
button {
    margin-top: 400px;
    padding: 1rem 5rem;
    border-radius: 25rem;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

@media (max-width: 700px) {
    background-image: url(${'https://w0.peakpx.com/wallpaper/945/631/HD-wallpaper-spotify-apps-music-thumbnail.jpg'});
}

`