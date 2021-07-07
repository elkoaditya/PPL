import React, {useEffect} from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import {useDispatch} from 'react-redux';
import {
  onGetToDoFolderList,
  onGetToDoLabelList,
  onGetToDoPriorityList,
  onGetToDoStaffList,
  onGetToDoStatusList,
} from '../../../redux/actions';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppsContainer from '../../../@crema/core/AppsContainer';

const ToDo = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetToDoLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoPriorityList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStaffList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStatusList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (props.match.params.id) {
      return <TaskDetail />;
    } else {
      return <TasksList />;
    }
  };

  const {messages} = useIntl();
  return (
    <AppsContainer
      title={messages['todo.todoApp']}
      sidebarContent={<TaskSideBar />}>
      {onGetMainComponent()}
    </AppsContainer>
  );
};

export default ToDo;

ToDo.defaultProps = {
  match: null,
};

ToDo.prototype = {
  match: PropTypes.node,
};
