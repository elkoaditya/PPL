import React, {createRef, useEffect} from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {onGetSelectedMail, onNullifyMail} from '../../../../redux/actions';
import {useHistory, useParams} from 'react-router-dom';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import {Box} from '@material-ui/core';
import AppAnimate from '../../../../@crema/core/AppAnimate';
import {MailDetailSkeleton} from '../../../../@crema/core/Skeleton/MailDetailSkeleton';

const MailDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const contentRef = createRef();

  const {id} = useParams();
  const selectedMail = useSelector(({mailApp}) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, id]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box height={1} display='flex' flexDirection='column' ref={contentRef}>
      <AppsHeader>
        <MailDetailHeader history={history} selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody selectedMail={selectedMail} history={history} />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
