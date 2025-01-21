document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("video");
  const channelList = document.getElementById("channel-list");
  const player = new shaka.Player(videoElement);

  // Playlist of DASH streams with ClearKey DRM
  const playlist = [
    {
      name: "CCTV 4 (DASH)",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd",
      drm: { kid: "b83566836c0d4216b7107bd7b8399366", key: "32d50635bfd05fbf8189a0e3f6c8db09" },
    },
    {
      name: "CNN HD (DASH)",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
      drm: { kid: "900c43f0e02742dd854148b7a75abbec", key: "da315cca7f2902b4de23199718ed7e90" },
    },
    {
      name: "Travel Channel SD",
      url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
      drm: { kid: "f3047fc13d454dacb6db4207ee79d3d3", key: "bdbd38748f51fc26932e96c9a2020839" },
    },
    {
      name: "Thrill SD",
      url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
      drm: { kid: "928114ffb2394d14b5585258f70ed183", key: "a82edc340bc73447bac16cdfed0a4c62" },
    },
    {
      name: "Animal Planet SD",
      url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
      drm: { kid: "436b69f987924fcbbc06d40a69c2799a", key: "c63d5b0d7e52335b61aeba4f6537d54d" },
    },
    {
      name: "Asian Food Network SD",
      url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd",
      drm: { kid: "1619db30b9ed42019abb760a0a3b5e7f", key: "5921e47fb290ae263291b851c0b4b6e4" },
    },
    {
      name: "Discovery Channel",
      url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd",
      drm: { kid: "d9ac48f5131641a789328257e778ad3a", key: "b6e67c37239901980c6e37e0607ceee6" },
    },
    {
      name: "BBC World News SD",
      url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",
      drm: { kid: "f59650be475e4c34a844d4e2062f71f3", key: "119639e849ddee96c4cec2f2b6b09b40" },
    },
    {
      name: "HBO HD",
      url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
      drm: { kid: "d47ebabf7a21430b83a8c4b82d9ef6b1", key: "54c213b2b5f885f1e0290ee4131d425b" },
    },
    {
      name: "Al Jazeera",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd",
      drm: { kid: "7f3d900a04d84492b31fe9f79ac614e3", key: "d33ff14f50beac42969385583294b8f2" },
    },
    {
      name: "France 24",
      url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_france24.mpd",
      drm: { kid: "257f9fdeb39d41bdb226c2ae1fbdaeb6", key: "e80ead0f4f9d6038ab34f332713ceaa5" },
    },
    {
      name: "ABC Australia",
      url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
      drm: { kid: "389497f9f8584a57b234e27e430e04b7", key: "3b85594c7f88604adf004e45c03511c0" },
    },
    {
      name: "A2Z",
      url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
      drm: { kid: "f703e4c8ec9041eeb5028ab4248fa094", key: "c22f2162e176eee6273a5d0b68d19530" },
    },
    {
      name: "NHK Japan",
      url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd",
      drm: { kid: "3d6e9d4de7d7449aadd846b7a684e564", key: "0800fff80980f47f7ac6bc60b361b0cf" },
    },
    {
      name: "TV5 Monde",
      url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd",
      drm: { kid: "fba5a720b4a541b286552899ba86e38b", key: "f63fa50423148bfcbaa58c91dfcffd0e" },
    },
    {
      name: "UAAP CPlay SD",
      url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
      drm: { kid: "95588338ee37423e99358a6d431324b9", key: "6e0f50a12f36599a55073868f814e81e" },
    },
    {
      name: "Fashion TV HD",
      url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",
      drm: { kid: "971ebbe2d887476398e97c37e0c5c591", key: "472aa631b1e671070a4bf198f43da0c7" },
    },
    {
      name: "True FM TV",
      url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
      drm: { kid: "0559c95496d44fadb94105b9176c3579", key: "40d8bb2a46ffd03540e0c6210ece57ce" },
    },
  ];



  // Function to load a selected channel
  async function loadChannel(channel) {
    try {
      if (channel.drm) {
        player.configure({
          drm: {
            clearKeys: {
              [channel.drm.kid]: channel.drm.key,
            },
          },
        });
      } else {
        player.configure({ drm: {} }); // Reset DRM for non-DRM content
      }

      await player.load(channel.url);
      console.log(`Now playing: ${channel.name}`);
    } catch (error) {
      console.error(`Error loading channel: ${channel.name}`, error);
    }
  }

  // Function to generate channel buttons dynamically
  function createChannelButtons() {
    playlist.forEach((channel) => {
      const button = document.createElement("button");
      button.textContent = channel.name;
      button.addEventListener("click", () => loadChannel(channel));
      channelList.appendChild(button);
    });
  }

  // Initialize player with the first channel and generate buttons
  function initializePlayer() {
    createChannelButtons();
    loadChannel(playlist[0]); // Auto-load the first channel by default
  }

  initializePlayer();
});
