document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("video");
  const channelList = document.getElementById("channel-list");
  const player = new shaka.Player(videoElement);

  // Playlist supporting both MPD (with ClearKey) and M3U8
  const playlist = [
    {
      name: "CCTV 4 (DASH)",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
      type: "dash",
    },
    {
      name: "CNN HD (DASH)",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
      kid: "900c43f0e02742dd854148b7a75abbec",
      key: "da315cca7f2902b4de23199718ed7e90",
      type: "dash",
    },
    {
      name: "GTV (HLS)",
      url: "https://ott.studentsdemo.com/stream/phcathenatv/gtv/master.m3u8?u=phc&p=1ed3395bba4d481a74e631943df9643663da8f300a8edececcb8b7da46349f01",
      type: "hls",
    },
    {
      name: "GMA SD (HLS)",
      url: "https://ott.studentsdemo.com/stream/phcathenatv/gma/master.m3u8?u=phc&p=1ed3395bba4d481a74e631943df9643663da8f300a8edececcb8b7da46349f01",
      type: "hls",
    },
  ];

  // Load a channel into the player
  async function loadChannel(channel) {
    try {
      if (channel.type === "dash") {
        player.configure({
          drm: {
            clearKeys: {
              [channel.kid]: channel.key,
            },
          },
        });
      } else {
        player.configure({ drm: {} }); // Reset DRM for non-DRM content
      }

      await player.load(channel.url);
      console.log(`Now playing: ${channel.name}`);
    } catch (error) {
      console.error("Error loading channel:", error);
    }
  }

  // Generate channel buttons
  playlist.forEach((channel) => {
    const button = document.createElement("button");
    button.textContent = channel.name;
    button.onclick = () => loadChannel(channel);
    channelList.appendChild(button);
  });

  // Load the first channel by default
  loadChannel(playlist[0]);
});
