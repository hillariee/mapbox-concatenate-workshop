var config = {
    style: 'mapbox://styles/vulkan/ck99eyhpf09ko1imowy2h8f0e', //TODO
    accessToken: 'pk.eyJ1IjoidnVsa2FuIiwiYSI6ImNrMm5qemRjYzBxdzYzaHBlazVuMThweTUifQ.P3hA5FEqn-9NKthdrHRyaw', //TODO
    title: 'Perfect Places', //TODO
    subtitle: 'My Favorite Places around the world i wish to visit sometime', //TODO
    byline: 'By Hill Onyechekwa', //TODO
    footer: 'Created at Concatenate Lagos 2019',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [
        //TODO replace this data with data from the first point in your dataset
        {
            id: 'concatenate-lagos',
            title: 'Concatenate Lagos',
            description: 'A free conference for African developers with speakers from around the world.',
            location: {
              "center": [
                3.366639462826271,
                6.51635441424402
              ],
              "zoom": 11.805394255186213,
              "pitch": 33.499999999999986,
              "bearing": 136.79999999999995
            }
        },
        //TODO Copy-paste more chapters here - one for each point in your dataset!
        {
              id: 'paris-france',
              title: 'the Louvre, paris, France',
              description: 'The most famous and established museum in the world.',
              location: {
                "center": [
                  2.337897,
                  48.86066
                ],
                "zoom": 11.805394255186213,
                "pitch": 33.499999999999986,
                "bearing": 136.79999999999995
              }
          },
        {
              id: 'newyork-usa',
              title: 'The museum of modern art, New York, USA',
              description: 'one of the most futurustic art museums ever',
              location: {
                "center": [
                  -73.977446,
                  40.761451
                ],
                "zoom": 11.805394255186213,
                "pitch": 33.499999999999986,
                "bearing": 136.79999999999995
              }
          },
        {
              id: 'amsterdam',
              title: 'van gogh museum, amsterdam',
              description: 'i just love museums and art don\'t hold it against me',
              location: {
                "center": [
                  4.88099,
                  52.358291
                ],
                "zoom": 11.805394255186213,
                "pitch": 33.499999999999986,
                "bearing": 136.79999999999995
              }
          },
        {
              id: 'vatican-city',
              title: 'The sistine chapel of vatican city,  Rome, Italy',
              description: 'One of the most prestigious works of art and architecture in the world',
              location: {
                "center": [
                  12.454405,
                  41.902728
                ],
                "zoom": 11.805394255186213,
                "pitch": 33.499999999999986,
                "bearing": 136.79999999999995
              }
          },
        {
              id: 'santorini-greece',
              title: 'santorini, greece',
              description: 'a place i want to own property in',
              location: {
                "center": [
                  25.37485,
                  36.462492
                ],
                "zoom": 11.805394255186213,
                "pitch": 33.499999999999986,
                "bearing": 136.79999999999995
              }
          }
    ]
};
