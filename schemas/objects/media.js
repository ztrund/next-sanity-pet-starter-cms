export default {
    "title": "Media",
    "name": "media",
    "type": "object",
    "fieldsets": [
        {"name": "imageSettings", "title": "Image Settings"},
        {"name": "videoSettings", "title": "Video Settings"}
    ],
    "fields": [
        {
            "title": "Type",
            "name": "type",
            "type": "string",
            "options": {
                "list": [
                    {"title": "Image", "value": "image"},
                    {"title": "Video", "value": "video"}
                ]
            }
        },
        {
            "title": "Image",
            "name": "image",
            "type": "image",
            "options": {"metadata": ["palette"], "hotspot": true},
            "fieldset": "imageSettings",
            "hidden": ({parent}) => parent.type !== "image"
        },
        {
            "title": "Video URL",
            "name": "videoUrl",
            "type": "url",
            "fieldset": "videoSettings",
            "hidden": ({parent}) => parent.type !== "video"
        }
    ],
    "input": ({set}) => {
        set(["image", "hidden"], (val) => val || !set(["type"]).value === "image");
        set(["videoUrl", "hidden"], (val) => val || !set(["type"]).value === "video");
    },
    preview: {
        select: {
            title: "type",
            imageUrl: "image.asset.url",
            videoUrl: "videoUrl"
        },
        prepare: (selection) => {
            const {title, imageUrl, videoUrl} = selection;
            const mediaType = title === "image" ? "img" : "video";
            const mediaSrc = title === "image" ? imageUrl : videoUrl;
            return {
                title: title === "image" ? "Image" : "Video",
                media: {
                    type: mediaType,
                    src: mediaSrc
                }
            };
        }
    }
}
