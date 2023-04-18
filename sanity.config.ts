import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {dashboardTool, projectInfoWidget, projectUsersWidget, sanityTutorialsWidget} from "@sanity/dashboard";
import {iconPicker} from "sanity-plugin-icon-picker";

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["homepage", "youtubeSettings", "about", "contactInfo"])

export default defineConfig({
    name: 'default',
    title: 'All In One Frenchies CMS',

    projectId: 'fcb9r3pv',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: (S) =>
                S.list()
                    .title("Content")
                    .items([

                        // Our singleton type has a list item with a custom child
                        S.listItem()
                            .title("Home Page")
                            .id("homepage")
                            .child(
                                S.document()
                                    .schemaType("homepage")
                                    .documentId("homepage")
                            ),
                        S.listItem()
                            .title("Youtube Settings")
                            .id("youtubeSettings")
                            .child(
                                S.document()
                                    .schemaType("youtubeSettings")
                                    .documentId("youtubeSettings")
                            ),
                        S.listItem()
                            .title("About Us")
                            .id("about")
                            .child(
                                S.document()
                                    .schemaType("about")
                                    .documentId("about")
                            ),
                        S.listItem()
                            .title("Contact Information")
                            .id("contactInfo")
                            .child(
                                S.document()
                                    .schemaType("contactInfo")
                                    .documentId("contactInfo")
                            ),

                        // Regular document types
                        S.documentTypeListItem("puppies").title("Puppies"),
                        S.documentTypeListItem("parents").title("Parents"),
                    ]),
        }),
        visionTool(),
        dashboardTool({
            widgets: [
                projectInfoWidget(),
                projectUsersWidget(),
            ]
        }),
        iconPicker(),
    ],

    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
    },

    document: {
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(({action}) => action && singletonActions.has(action))
                : input,
    },
})
