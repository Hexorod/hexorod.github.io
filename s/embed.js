let destination = "";

try {
	destination = new URL(location.hash.slice(1));

	if (!destination.protocol) {
		destination = new URL("https://" + destination.href);
	}
} catch (err) {
	alert(`Bad # string or bad URL. Got error:\n${err}`);
	throw err;
}

// Register the service worker from a custom URL
function registerSW() {
	return navigator.serviceWorker.register("https://hexorod.github.io/estertester/s/uv-sw.js");
}

registerSW()
	.then(() => {
		window.open(
			__uv$config.prefix + __uv$config.encodeUrl(destination.toString()),
			"_self",
		);
	})
	.catch((err) => {
		alert(`Encountered error:\n${err}`);
	});
