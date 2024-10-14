/**
 *
 * Worklogs
 *
 */

import { makeLoggedInUserSelector } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
});

function Worklogs() {
  const { user } = useSelector(stateSelector);
  const navigate = useNavigate();
  return (
    <>
    fsdfsdfs
    </>
  );
}

export default Worklogs;
