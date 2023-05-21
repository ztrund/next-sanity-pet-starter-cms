export default {
    title: "Puppies",
    name: "puppies",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            description: "The name of the puppy.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Birthdate",
            name: "birthdate",
            type: "date",
            description: "The birthdate of the puppy.",
        },
        {
            title: "Gender",
            name: "gender",
            type: "string",
            description: "The gender of the puppy.",
            options: {
                list: ["Male", "Female"],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Color",
            name: "color",
            type: "string",
            description: "The color of the puppy.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Weight",
            name: "weight",
            type: "number",
            description: "The weight of the puppy in pounds.",
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            description: "A description of the puppy, including any important details or personality traits.",
        },
        {
            title: "Availability",
            name: "availability",
            type: "string",
            description: "The availability of the puppy. This can be 'available', 'reserved', or 'sold'.",
            options: {
                list: ["Available", "Reserved", "Sold"],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Price",
            name: "price",
            type: "number",
            description: "The price of the item in USD.",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Media Items",
            name: "mediaItems",
            type: "array",
            of: [{type: "media"}],
            description: "One or more media items of the puppy (photos or videos).",
            validation: (Rule) => Rule.required().custom((mediaItems) => {
                if (!mediaItems) {
                    return 'At least one Image is required';
                }
                const imageItems = mediaItems.filter(item => item.type === 'image');
                return imageItems.length > 0 ? true : 'At least one Image is required';
            }),
        },
        {
            title: "Parents",
            name: "parents",
            type: "object",
            fields: [
                {
                    title: "Mother",
                    name: "mother",
                    type: "reference",
                    to: [{type: "parents"}],
                    options: {
                        filter: 'gender == "Female"',
                        disableNew: true,
                    },
                    description: "The mother of the puppy.",
                },
                {
                    title: "Father",
                    name: "father",
                    type: "reference",
                    to: [{type: "parents"}],
                    options: {
                        filter: 'gender == "Male"',
                        disableNew: true,
                    },
                    description: "The father of the puppy.",
                },
            ]
        },
    ],
};
