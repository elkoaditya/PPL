import React, {useState} from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ChatWindow from './ChatWindow';
import {Box, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Fonts} from '../../../../shared/constants/AppEnums';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    cursor: 'pointer',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  marginTop0: {
    marginTop: 0,
  },
  marginY: {
    marginTop: 0,
    marginBottom: 0,
  },
}));

const ConnectionListItem = (props) => {
  const {connection} = props;
  const [isOpenChat, setOpenChat] = useState(false);

  const classes = useStyles();

  return (
    <>
      <ListItem
        onClick={() => setOpenChat(true)}
        key={connection.id}
        className={classes.listItem}
        alignItems='flex-start'>
        <Box component='span'>
          <ListItemAvatar className={classes.marginTop0}>
            <Avatar
              className={classes.avatar}
              alt='Remy Sharp'
              src={connection.image}
            />
          </ListItemAvatar>
        </Box>
        <ListItemText
          className={classes.marginY}
          primary={
            <Box component='p' mb={0} fontWeight={Fonts.MEDIUM}>
              {connection.name}
            </Box>
          }
          secondary={
            <Box component='span' display='block' color='text.primary'>
              {connection.status}
            </Box>
          }
        />
      </ListItem>

      {isOpenChat ? (
        <ChatWindow
          setOpenChat={setOpenChat}
          isOpenChat={isOpenChat}
          connection={connection}
        />
      ) : null}
    </>
  );
};

export default ConnectionListItem;

ConnectionListItem.defaultProps = {
  connection: null,
};

ConnectionListItem.prototype = {
  connection: PropTypes.object,
};
