export default {
    name: 'companyInfo',
    title: 'Company Information',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            description: 'The company name will be displayed prominently across the site. If a company logo is not provided, the company name will be used in its place in the header.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'companyNameShort',
            title: 'Company Name (Short)',
            type: 'string',
            description: 'The short company name will be used when installed as a PWA on a mobile device. If not provided, the company name will be used instead.',
            validation: (Rule) => [
                Rule.required().error('Short company name is required'),
                Rule.max(12).warning('Short company names should be 12 characters or less.'),
            ],
        },
        {
            name: 'companyDescription',
            title: 'Company Description',
            type: 'text',
            description: 'The company description will be displayed when installing the site as a PWA on a mobile device.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'companyLogo',
            title: 'Company Logo',
            type: 'image',
            description: 'Upload your company logo here. It will be used on the left side of the header across the site. If not provided, the company name will be used instead.',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'favicon',
            title: 'Website Favicon',
            type: 'image',
            description: 'This image will be used as the website favicon. The image should be square, ideally 192x192px or larger. Ensure all important content is placed within the center of the image. For best results, do not use a maskable icon for this purpose.',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'pwaIcon',
            title: 'PWA Icon',
            type: 'image',
            description: 'This image will be used as the PWA icon. The image should be square, ideally 192x192px or larger. Ensure all important content is placed within a circular area in the center of the image, leaving some padding around the circle. This allows the icon to be displayed properly across different devices and platforms, which may apply various masks. You can use https://maskable.app/ to test and edit icon.',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ]
}