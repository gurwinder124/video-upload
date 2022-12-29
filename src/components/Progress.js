import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress({percentage}) {
  return <ProgressBar now={percentage} label={`${percentage}%`}  />;
}

export default Progress;