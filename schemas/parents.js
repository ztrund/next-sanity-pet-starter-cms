export default {
    title: "Parents",
    name: "parents",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            description: "The name of the parent.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Birthdate",
            name: "birthdate",
            type: "date",
            description: "The birthdate of the parent.",
        },
        {
            title: "Gender",
            name: "gender",
            type: "string",
            description: "The gender of the parent.",
            options: {
                list: ["Male", "Female"],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Color",
            name: "color",
            type: "string",
            description: "The color of the parent.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Weight",
            name: "weight",
            type: "number",
            description: "The weight of the parent in pounds.",
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            description: "A description of the parent, including any important details or personality traits.",
        },
        {
            title: "Media Items",
            name: "mediaItems",
            type: "array",
            of: [{type: "media"}],
            description: "One or more media items of the parent (photos or videos).",
            validation: (Rule) => Rule.required().custom((mediaItems) => {
                if (!mediaItems) {
                    return 'At least one Image is required';
                }
                const imageItems = mediaItems.filter(item => item.type === 'image');
                return imageItems.length > 0 ? true : 'At least one Image is required';
            }),
        },
    ],
};
