window.onload = () => {
if (code) {
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  const code = urlParams.get('code');
  fetchUserProfile(code);
} else {
  alert(`no code`);
}
}
function fetchUserProfile(code) {
  const requestBody = new URLSearchParams();
  requestBody.append('client_id', '1095020466852348024');
  requestBody.append('client_secret', 'GthHZEULOXFAo_ajg3mpO6EnGaXY1_dm');
  requestBody.append('grant_type', 'authorization_code');
  requestBody.append('code', code);
  requestBody.append('redirect_uri', 'https://blockg2500.github.io/testweb/');
  requestBody.append('scope', 'identify email guilds');
fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: requestBody
  })
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    console.log(`Access Token: ${accessToken}`);
fetch('https://discord.com/api/v10/users/@me', {
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
      console.error('Failed to fetch user data:', error);
    });
  })
  .catch(error => {
    console.error('Token exchange failed:', error);
  });
}
function show(user) {
   alert(`ID: ${user.id}, Email: ${user.email}`);
}
