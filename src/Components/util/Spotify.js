let acccessToken;
const cliendID='d954ff7ee6e04e35a9f0fe3ddf6668c7';
const redirectedURI= 'http://localhost:3000/'
const Spotify ={
    getAccessToken(){
    if(acccessToken){return acccessToken}
        let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch) {
            acccessToken = accessTokenMatch[1];
            return acccessToken
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${cliendID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectedURI}`
        window.location = accessUrl;
        }
    },
    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{headers:{'Authorization':`Bearer ${accessToken}`}}).then(
            (response)=>{
                return response.json()
            }).then((jsonResponse)=>{
                if(!jsonResponse.tracks){
                    return []
                } else {
                    console.log('hui')
                    console.log(jsonResponse.tracks.items)
                    return jsonResponse.tracks.items.map((item)=>({
                        id: item.id,
                        name: item.name,
                        album: item.album.name,
                        artists: item.artists[0].name,
                        uri: item.uri,
                        preview: item.preview_url,
                        img: item.album.images[0].url
                    }))
     
                }
        })
    }
}

export default Spotify;