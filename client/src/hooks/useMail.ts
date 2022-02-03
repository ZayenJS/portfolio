import { useDispatch, useSelector } from 'react-redux';
import { resetMail, sendMail } from '../store/actions/contact';
import { State } from '../store/reducers';

export const useMail = () => {
  const dispatch = useDispatch();
  const { mailStatus, notification } = useSelector((state: State) => state.contact);

  return {
    sendMail: () => dispatch(sendMail({})),
    resetMail: () => dispatch(resetMail()),
    mailStatus,
    notification,
  };
};
