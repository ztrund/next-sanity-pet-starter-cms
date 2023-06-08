import React from 'react';
import iconsData from './fontawesome-icons.json';
import SearchableDropdown from "../../src/searchableDropdown";

const getIconOptions = () => {
    const options = [];

    for (const iconName in iconsData) {
        const icon = iconsData[iconName];
        const iconPrefix = icon.styles[0];
        const iconViewBox = icon.svg[iconPrefix].viewBox;
        const iconPath = icon.svg[iconPrefix].path;
        if (iconPrefix === "brands") {
            options.push({
                title: `${iconName}`,
                value: `${iconName} ~~ ${iconViewBox} ~~ ${iconPath}`,
            });
        }
    }

    return options;
};

export default {
    name: 'faIconPicker',
    title: 'Font Awesome Icon Picker',
    type: 'object',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
                list: getIconOptions(),
            },
            // components: {
            //     input: SearchableDropdown,
            // },
        },
    ],
};
