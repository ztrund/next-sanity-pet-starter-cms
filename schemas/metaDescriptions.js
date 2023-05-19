export default {
    name: 'metaDescriptions',
    title: 'Meta Descriptions',
    type: 'document',
    fields: [
        {
            name: 'home',
            title: 'Home',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'puppies',
            title: 'Puppies',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'parents',
            title: 'Parents',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'puppy',
            title: 'Puppy',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'parent',
            title: 'Parent',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
    ]
}