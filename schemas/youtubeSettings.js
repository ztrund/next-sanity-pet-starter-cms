export default {
    name: 'youtubeSettings',
    title: 'YouTube Settings',
    type: 'document',
    fields: [
        {
            name: 'channelUrl',
            title: 'Channel URL',
            type: 'url',
            description: 'The YouTube channel URL',
        },
        {
            name: 'fallbackVideoUrl',
            title: 'Fallback Video URL',
            type: 'url',
            description: 'The video URL to display when the livestream is not live',
        },
    ],
    initialValue: {
        channelUrl: '',
        fallbackVideoUrl: '',
    },
};
