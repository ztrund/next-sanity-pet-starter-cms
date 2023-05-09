import React from 'react';
import Select from 'react-select';
import iconsData from "../schemas/objects/fontawesome-icons.json";

const getIconOptions = () => {
    const options = [];

    for (const iconName in iconsData) {
        const icon = iconsData[iconName];
        const iconPrefix = icon.styles[0];
        options.push({
            label: `${iconName} (${iconPrefix})`,
            title: `${iconName} (${iconPrefix})`,
            value: `fa-${iconPrefix} fa-${iconName}`,
        });
    }

    return options;
};

const SearchableDropdown = React.forwardRef((props, ref) => {
    const {type, value, onChange} = props;

    const handleChange = (selectedOption) => {
        onChange(selectedOption ? type.name === 'string' ? selectedOption.value : selectedOption : null);
    };

    return (
        <Select
            ref={ref}
            value={value && {label: value.title, value: value.value}}
            defaultValue={value && {label: value.title, value: value.value}}
            options={getIconOptions()}
            onChange={handleChange}
            isClearable
            placeholder="Search for an icon"
        />
    );
});

export default SearchableDropdown;

