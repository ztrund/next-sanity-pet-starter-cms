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
        {
            name: 'displayOption',
            title: 'Display Option on Puppy Pages',
            type: 'string',
            options: {
                list: [
                    { title: 'Banner', value: 'banner' },
                    { title: 'Container (Logo and Text)', value: 'container' },
                    { title: 'None', value: 'none' },
                ],
                layout: 'radio',
            },
        },
    ],
}