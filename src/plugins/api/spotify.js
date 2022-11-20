const clientID = process.env.spotifyClientID
const clientSecret = process.env.spotifyClientSecret
const refreshToken = process.env.spotifyRefreshToken

const basic = Buffer.from(`${clientID}:${clientSecret}`).toString('base64')
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

// This gets the access token from Spotify to connect to the API using provided refresh token.
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }).toString()
  })
  return response.json()
}

// Get the current now playing track of given user access token.
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken()
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    //   'Content-Type': 'application/json'
    }
  })
}

const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played'
export const getRecentlyPlayed = async () => {
  const { access_token: accessToken } = await getAccessToken()
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    //   'Content-Type': 'application/json'
    }
  })
}

const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'
export const getTopTracks = async () => {
  const { access_token: accessToken } = await getAccessToken()
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

