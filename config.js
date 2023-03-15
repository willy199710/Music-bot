module.exports = {
    app: {
        token: 'OTY4MjA0OTYzMTY1NjM0NTgz.G2mh7j.MxRyJr58QozDIK2h_UoXrvBcqPZ0bUUSdbuka4',
        playing: '機油',
        global: true,
        guild: 'XXX',
        prefix: "?"
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 60,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
