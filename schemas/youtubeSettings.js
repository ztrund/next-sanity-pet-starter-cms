export default {
    name: 'youtubeSettings',
    title: 'YouTube Settings',
    type: 'document',
    fields: [
        {
            name: 'channelId',
            title: 'Channel ID',
            type: 'string',
            description: 'The YouTube channel ID',
        },
        {
            name: 'fallbackVideoId',
            title: 'Fallback Video ID',
            type: 'string',
            description: 'The video ID to display when the livestream is not live',
        },
    ],
    initialValue: {
        channelId: '',
        fallbackVideoId: '',
    },
};
