function login() {
  const CLIENT_ID = '1095020466852348024';
  const REDIRECT_URI = 'https://blockg2500.github.io/testweb/';
  const SCOPE = 'identify email';

  const authUrl = `https://discord.com/api/oauth2/authorize?client_id=1095020466852348024&redirect_uri=https%3A%2F%2Fblockg2500.github.io%2Ftestweb%2F&response_type=code&scope=identify%20email%20guilds`;

  window.location.href = authUrl;
}

function fetchUserProfile(code) {
  const CLIENT_ID = '1095020466852348024';
  const CLIENT_SECRET = 'X02Qw8piq25dXxekVNyjzV0paY1_-i-2';
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
      const discordName = user.username;
      const discordId = user.id;
      const discordEmail = user.email;
document.getElementById('discordname').value = discordname
document.getElementById('ID').value = discordId
document.getElementById('email').value = discordEmail
      console.log(user);
    })
    .catch(error => {
      alert("fetch error:" + error)
      console.error('Error fetching user profile:', error);
    });
  })
  .catch(error => {
    alert("access or code error:" + error)
    console.error('Error exchanging authorization code for access token:', error);
  });
}

// Check if the code exists in local storage
const storedCode = localStorage.getItem('discordCode');

if (storedCode) {
  fetchUserProfile(code);
} else {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    // Save the code to local storage
    localStorage.setItem('discordCode', code);
fetchUserProfile(code);
    // Remove the code from the URL
    const newUrl = window.location.href.replace(`?code=${code}`, '');
    window.history.replaceState({}, document.title, newUrl);

  }
}