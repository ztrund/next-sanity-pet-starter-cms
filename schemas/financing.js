export default {
    name: 'financing',
    title: 'Financing',
    type: 'document',
    fields: [
        {
            name: 'banner',
            title: 'Banner',
            type: 'image',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}