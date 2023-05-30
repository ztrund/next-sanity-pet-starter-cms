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
            name: 'displayOptionPuppy',
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
        {
            name: 'displayOptionParent',
            title: 'Display Option on Parent Pages',
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
        {
            name: 'displayOptionPuppies',
            title: 'Display Option on Puppies Page',
            type: 'string',
            options: {
                list: [
                    { title: 'Container (Logo and Text)', value: 'container' },
                    { title: 'None', value: 'none' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'displayOptionParents',
            title: 'Display Option on Parents Page',
            type: 'string',
            options: {
                list: [
                    { title: 'Container (Logo and Text)', value: 'container' },
                    { title: 'None', value: 'none' },
                ],
                layout: 'radio',
            },
        },
    ],
}