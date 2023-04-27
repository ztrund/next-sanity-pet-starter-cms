import React from 'react';

const RebuildButtonWidget: React.FC = () => {
    const deployHookUrl = process.env.SANITY_STUDIO_REACT_APP_DEPLOY_HOOK_URL;

    const triggerRebuild = async () => {
        if (!deployHookUrl) {
            console.error('Deploy hook URL is missing');
            return;
        }

        try {
            const response = await fetch(deployHookUrl, {
                method: 'POST',
                mode: 'no-cors',
            });

            if (response.type === 'opaque') {
                alert('Rebuild triggered');
            } else {
                console.error('Error triggering rebuild:', response.statusText);
                alert('Error triggering rebuild');
            }
        } catch (error) {
            console.error('Error triggering rebuild:', error);
            alert('Error triggering rebuild');
        }
    };

    return (
        <div>
            <h2>Rebuild Site</h2>
            <button onClick={triggerRebuild}>Trigger Rebuild</button>
        </div>
    );
};

export default RebuildButtonWidget;
