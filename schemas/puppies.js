import media from "./media"

export default {
    "title": "Puppies",
    "name": "puppies",
    "type": "document",
    "fields": [
        {
            "title": "Name",
            "name": "name",
            "type": "string",
            "description": "The name of the puppy."
        },
        {
            "title": "Birthdate",
            "name": "birthdate",
            "type": "date",
            "description": "The birthdate of the puppy."
        },
        {
            "title": "Gender",
            "name": "gender",
            "type": "string",
            "description": "The gender of the puppy.",
            "options": {
                "list": [
                    "Male",
                    "Female"
                ],
            }
        },
        {
            "title": "Color",
            "name": "color",
            "type": "string",
            "description": "The color of the puppy."
        },
        {
            "title": "Weight",
            "name": "weight",
            "type": "number",
            "description": "The weight of the puppy in pounds."
        },
        {
            "title": "Description",
            "name": "description",
            "type": "text",
            "description": "A description of the puppy, including any important details or personality traits."
        },
        {
            "title": "Media Items",
            "name": "mediaItems",
            "type": "array",
            "of": [{"type": "media"}],
            "description": "One or more media items of the puppy (photos or videos)."
        },
        {
            "title": "Availability",
            "name": "availability",
            "type": "string",
            "description": "The availability of the puppy. This can be 'available', 'reserved', or 'sold'.",
            "options": {
                "list": [
                    "Available",
                    "Reserved",
                    "Sold"
                ]
            }
        },
        {
            "title": "Price",
            "name": "price",
            "type": "number",
            "description": "The price of the item in USD."
        }
    ]
}
