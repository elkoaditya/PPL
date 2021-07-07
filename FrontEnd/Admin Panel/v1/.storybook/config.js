import {addDecorator, addParameters} from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import {withA11y} from '@storybook/addon-a11y';
import defaultConfig from '../src/@crema/utility/ContextProvider/defaultConfig';
import {withKnobs} from '@storybook/addon-knobs';
import theme from './theme';
import '!style-loader!css-loader!./css/storybook.css';

addDecorator(muiTheme(defaultConfig.theme));
addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  options: {
    theme: theme,
  },
});
