import CircularProgress, {
} from '@mui/material/CircularProgress';
import * as React from 'react';

const DataRenderer = ({ children, error, isLoading }) => {
  if (isLoading) {
    return (
      <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ margin: '50px','svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
    );
  }

  if (error) {
    return <div className='text-center'>{error}</div>;
  }

  return children;
};

export default DataRenderer;
