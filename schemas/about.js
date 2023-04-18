export default {
    name: 'about',
    title: 'About Us',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}],
            validation: Rule => Rule.required(),
        },
        {
            title: "Media Items",
            name: "mediaItems",
            type: "array",
            of: [{type: "media"}],
            description: "One or more media items to show on about us page (photos or videos)."
        },
    ],
};
