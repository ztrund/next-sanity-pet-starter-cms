export default {
    name: 'companyInfo',
    title: 'Company Information',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'companyLogo',
            title: 'Company Logo',
            type: 'image',
        },
    ]
}