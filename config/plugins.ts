import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        secure: true,
      },
      actionOptions: {
        upload: {
          folder: env('CLOUDINARY_FOLDER', 'portfolio'),
        },
        uploadStream: {
          folder: env('CLOUDINARY_FOLDER', 'portfolio'),
        },
        delete: {},
      },
    },
  },
});

export default config;
