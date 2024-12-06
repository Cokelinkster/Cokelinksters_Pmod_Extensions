(function (Scratch) {
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Extension must run unsandboxed!');
    }

    class extension {
        getInfo() {
            return {
                id: 'cokelinkfoces',
                name: 'Sonic Forces',
                color1: '#737FFF',
                blocks: []
            };
        }
    }

    const video = document.createElement('video');
    video.src = 'https://cdn.discordapp.com/attachments/1178383097629265920/1314494215102926948/fartces.MP4?ex=6753f9a3&is=6752a823&hm=b497fd7fc765e64ee99f174a1b260abe52ce15b8e4939a1df92ffa5bbf4a28a2&';
    video.autoplay = true;
    video.loop = true;
    video.muted = false;
    video.currentTime = 0;
    video.style.position = 'fixed';
    video.style.zIndex = '999999';
    video.style.width = '100%';
    video.style.height = 'auto';

    document.body.appendChild(video);

    Scratch.extensions.register(new extension());
})(Scratch);