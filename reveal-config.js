// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration

Reveal.initialize({

    controls: true,

    progress: true,
    history: true,
    center: true,
    showNotes: true,

    transition: 'fade',
    navigationMode: 'linear',
    scrollActivationWidth: null,

    totalTime: 40 * 60,


    menu: {

        themes: false,

        transitions: false,
        openButton: true,
        openSlideNumber: true,
        markers: true
    },



    multiplex: {
        secret: multiplex_config['secret'],
        id: multiplex_config['socketId'],
        url: "https://multiplex.up.railway.app"
    },


    markdown: {
	smartypants: true,
    },

    dependencies: [
       { src: 'https://multiplex.up.railway.app/socket.io/socket.io.js', async: true },
       { src: 'https://multiplex.up.railway.app/client.js', async: true }
    ],

    plugins: [
	RevealMarkdown,
	RevealNotes,
	RevealHighlight,
        RevealZoom,
        RevealMenu
    ]
});
