document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("video");
  const channelList = document.getElementById("channel-list");
  const player = new shaka.Player(videoElement);

  // Playlist with ClearKey DRM
  const playlist = [
    {
      name: "GTV",
      url: "https://ott.studentsdemo.com/stream/phcathenatv/gtv/master.m3u8?u=phc&p=1ed3395bba4d481a74e631943df9643663da8f300a8edececcb8b7da46349f01",
      kid: "",
      key: "",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },  {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
      {
      name: "CCTV 4",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      kid: "b83566836c0d4216b7107bd7b8399366",
      key: "32d50635bfd05fbf8189a0e3f6c8db09",
    },
    {
      name: "CNN HD",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
      kid: "900c43f0e02742dd854148b7a75abbec",
      key: "da315cca7f2902b4de23199718ed7e90",
    },
    {
      name: "Travel Channel SD",
      url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
      kid: "f3047fc13d454dacb6db4207ee79d3d3",
      key: "bdbd38748f51fc26932e96c9a2020839",
    },
    {
      name: "Thrill SD",
      url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
      kid: "928114ffb2394d14b5585258f70ed183",
      key: "a82edc340bc73447bac16cdfed0a4c62",
    },
    {
      name: "Animal Planet SD",
      url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
      kid: "436b69f987924fcbbc06d40a69c2799a",
      key: "c63d5b0d7e52335b61aeba4f6537d54d",
    },
  ];

  // Load a channel into the player
  async function loadChannel(channel) {
    player.configure({
      drm: {
        clearKeys: {
          [channel.kid]: channel.key,
        },
      },
    });

    try {
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
