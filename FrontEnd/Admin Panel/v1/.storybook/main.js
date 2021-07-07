module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    'storybook-addon-material-ui/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
