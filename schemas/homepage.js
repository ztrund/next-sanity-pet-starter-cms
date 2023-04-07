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
    ],
};
