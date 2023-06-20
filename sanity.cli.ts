import {defineCliConfig} from 'sanity/cli'
import {dataset, projectId} from "./src/environment";

export default defineCliConfig({
    api: {
        projectId: projectId,
        dataset: dataset,
    }
})
