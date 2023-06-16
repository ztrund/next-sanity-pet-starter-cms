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
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'position',
                            title: 'Position',
                            type: 'string'
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            },
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ]
        },
        {
            name: 'teamDescription',
            title: 'Team Description',
            type: 'array',
            of: [{type: 'block'}],
        }
    ],
};