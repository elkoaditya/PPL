import React from 'react';
import Box from '@material-ui/core/Box';
import LabelIcon from '@material-ui/icons/Label';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {NavLink} from '../../../../@crema';
import PropTypes from 'prop-types';
import useStyles from './index.style';

const LabelItem = ({label}) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      to={`/apps/contact/label/${label.alias}`}
      className={classes.listItem}
      component={NavLink}
      activeClassName='active'>
      <Box component='span' width={12} height={12} mr={{xs: 4, xl: 7}} mb={1.5}>
        <LabelIcon style={{color: `${label.color}`}} />
      </Box>
      <ListItemText primary={label.name} />
    </ListItem>
  );
};

export default LabelItem;

LabelItem.prototype = {
  label: PropTypes.object.isRequired,
};
