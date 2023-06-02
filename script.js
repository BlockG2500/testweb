const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code');
const SCOPE = 'identify email guilds';
if (code) {
  const SCOPE = 'identify email guilds';
  fetchUserProfile(code, SCOPE)
}

function login() {
  const authUrl = "https://discord.com/api/oauth2/authorize?client_id=1095020466852348024&redirect_uri=https%3A%2F%2Fblockg2500.github.io%2Ftestweb%2F&response_type=code&scope=identify%20email%20guilds";
  window.location.href = authUrl;
}
function fetchUserProfile(code, SCOPE) {
  const CLIENT_ID = '1095020466852348024';
  const CLIENT_SECRET = 'eBF6gAIja0S9kzPBFjcllu9bjiR0R_DC';
  const REDIRECT_URI = 'https://blockg2500.github.io/testweb/';
  const tokenUrl = 'https://discord.com/api/oauth2/token';
  const userProfileUrl = 'https://discord.com/api/users/@me';

  const data = new URLSearchParams();
  data.append('client_id', CLIENT_ID);
  data.append('client_secret', CLIENT_SECRET);
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  data.append('redirect_uri', REDIRECT_URI);
  data.append('scope', SCOPE);

  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data
  })
  .then(response => response.json())
  .then(tokenData => {
    const accessToken = tokenData.access_token;

    fetch(userProfileUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(user => {
      console.log(user);
      return user;
    })
    .catch(error => {
      console.error('Error fetching user profile:', error);
    });
  })
  .catch(error => {
    console.error('Error exchanging authorization code for access token:', error);
  });
}
function show(user) {
   alert(`this is ${user.id}, ${user.email}`);
}

