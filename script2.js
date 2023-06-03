window.onload = () => {
		const fragment = new URLSearchParams(window.location.hash.slice(1));
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
		if (!accessToken) {
			return alert(`no token`);
		}
fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then(result => result.json())
			.then(response => {
				const { username, discriminator, email, id } = response
        alert(`Id: ${id}, tags: ${discriminator}, email: ${email}, username: ${username}`);
        return response
			})
			.catch(console.error);
	};
const { username, discriminator, email, id } = response
function show(username, id, discriminator, email) {
   alert(`Id: ${id}, tags: ${discriminator}, email: ${email}, username: ${username}`);
}
