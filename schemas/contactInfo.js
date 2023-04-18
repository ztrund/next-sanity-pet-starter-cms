// contactInfo.js
import {preview} from "sanity-plugin-icon-picker";

export default {
    name: 'contactInfo',
    title: 'Contact Information',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'businessHours',
            title: 'Business Hours',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'day',
                            title: 'Day(s)',
                            type: 'string',
                        },
                        {
                            name: 'hours',
                            title: 'Hours',
                            type: 'string',
                        },
                    ],
                    preview: {
                        select: {
                            day: 'day',
                            hours: 'hours',
                        },
                        prepare({ day, hours }) {
                            return {
                                title: `${day}: ${hours}`,
                            };
                        },
                    },
                },
            ],
        },
        {
            name: 'socialMediaLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'iconPicker',
                            options: {
                                providers: ["fa"],
                                outputFormat: 'react',
                            }
                        },
                    ],
                    preview: {
                        select: {
                            icon: 'icon',
                            platform: 'platform',
                            url: 'url',
                        },
                        prepare({ icon, platform, url }) {
                            return {
                                title: platform,
                                subtitle: url,
                                media: preview(icon),
                            };
                        },
                    },
                },
            ],
        },
    ],
};