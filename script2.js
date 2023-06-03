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
        alert(user.id);
				const { username, discriminator } = response
			})
			.catch(console.error);
	};