export default {
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required(),
        },
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
};
