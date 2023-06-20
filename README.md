# Next-Sanity-Pet-Starter-CMS

This repository contains the Sanity CMS for
the [Next Sanity Pet Starter](https://github.com/ztrund/next-sanity-pet-starter) project. This CMS serves as the
backend for managing the data in the project.

## Getting Started

Follow these steps to get the CMS running on your local machine:

1. Clone this repository: `git clone https://github.com/ztrund/next-sanity-pet-starter-cms.git`
2. Move into the project directory: `cd next-sanity-pet-starter-cms`
3. Install the dependencies: `npm install`
4. Copy the `.env.local.example` to a new file named `.env.local` and fill in your Sanity Studio settings.
5. Start the development server: `npm run dev`

## Configuration

### Local Development

For local development, you need to set the environment variables. Rename the `.env.local.example` file to `.env.local`
and fill in the values:

```plaintext
SANITY_STUDIO_TITLE="Next Sanity Pet Starter CMS"
# Required, find them on https://manage.sanity.io
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=
```

## License

[MIT](LICENSE)