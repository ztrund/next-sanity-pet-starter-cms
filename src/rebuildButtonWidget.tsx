import React, { useEffect, useState } from 'react';
import { useSecrets, SettingsView } from '@sanity/studio-secrets';

const namespace = "rebuild-button";

const pluginConfigKeys = [
    {
        key: "deployHookUrl",
        description: "The URL to trigger a rebuild of the site, can be found on Cloudflare Pages.",
        title: "Deploy Hook URL",
        type: "string",
    },
];

interface Secrets {
    deployHookUrl?: string;
}

const RebuildButtonWidget: React.FC = () => {
    const { secrets: rawSecrets, loading } = useSecrets(namespace);
    const secrets = rawSecrets as Secrets;
    const [deployHookUrl, setDeployHookUrl] = useState<string | null>(null);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        if (secrets && secrets.deployHookUrl) {
            setDeployHookUrl(secrets.deployHookUrl);
        }
    }, [secrets]);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Rebuild Site</h2>
            <button onClick={triggerRebuild}>Trigger Rebuild</button>
            <div>
                <button onClick={() => setShowSettings(true)}>Set Deploy Hook URL</button>
                {showSettings && (
                    <SettingsView
                        title="Set your Deploy Hook URL"
                        namespace={namespace}
                        keys={pluginConfigKeys}
                        onClose={() => setShowSettings(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default RebuildButtonWidget;
