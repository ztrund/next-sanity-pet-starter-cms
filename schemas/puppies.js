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
            "description": "The gender of the puppy."
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
            "title": "Temperament",
            "name": "temperament",
            "type": "array",
            "of": [{"type": "string"}],
            "description": "The temperament of the puppy. This can be a list of one or more traits."
        },
        {
            "title": "Description",
            "name": "description",
            "type": "text",
            "description": "A description of the puppy, including any important details or personality traits."
        },
        {
            "title": "Photos",
            "name": "photos",
            "type": "array",
            "of": [{"type": "image", "options": {"metadata": ["palette"]}}],
            "description": "One or more photos of the puppy."
        },
        {
            "title": "Availability",
            "name": "availability",
            "type": "string",
            "description": "The availability of the puppy. This can be 'available', 'reserved', or 'sold'."
        }
    ]
}
