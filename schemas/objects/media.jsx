export default {
    title: "Media",
    name: "media",
    type: "object",
    fieldsets: [
        {name: "imageSettings", title: "Image Settings"},
        {name: "videoSettings", title: "Video Settings"},
    ],
    fields: [
        {
            title: "Type",
            name: "type",
            type: "string",
            options: {
                list: [
                    {title: "Image", value: "image"},
                    {title: "Video", value: "video"},
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {metadata: ["palette"], hotspot: true},
            hidden: ({parent}) => parent?.type !== "image",
            validation: Rule => Rule.custom((field, context) => {
                // If type is "image", ensure this field is filled
                if (context.parent?.type === 'image' && !field) {
                    return 'An image is required';
                }
                return true;  // Otherwise, it's valid
            }),
        },
        {
            title: "Video URL",
            name: "videoUrl",
            type: "url",
            hidden: ({parent}) => parent?.type !== "video",
            validation: Rule => Rule.custom((field, context) => {
                // If type is "video", ensure this field is filled
                if (context.parent?.type === 'video' && !field) {
                    return 'A video URL is required';
                }
                return true;  // Otherwise, it's valid
            }),
        },
    ],
    input: ({set}) => {
        set(["image", "hidden"], (val) => val || !set(["type"]).value === "image");
        set(["videoUrl", "hidden"], (val) => val || !set(["type"]).value === "video");
    },
    preview: {
        select: {
            title: "type",
            imageUrl: "image.asset.url",
            videoUrl: "videoUrl",
        },
        prepare: (selection) => {
            const {title, imageUrl, videoUrl} = selection;
            let thumbnailUrl;

            if (videoUrl) {
                const videoIdMatch = videoUrl.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
                if (videoIdMatch) {
                    thumbnailUrl = `https://i.ytimg.com/vi_webp/${videoIdMatch[2]}/default.webp`;
                }
            }

            return {
                title: title === "image" ? "Image" : "Video",
                media: title === "image"
                    ? <img src={imageUrl} alt={imageUrl}/>
                    : <img src={thumbnailUrl} alt={videoUrl}/>,
            };
        },
    },
};
