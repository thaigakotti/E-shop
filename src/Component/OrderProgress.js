import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CircularLoader() {
  const history = useHistory();

  useEffect(() => {
  
    const timer = setTimeout(() => {
      toast.success('Order Placed Successfully',{autoClose:400});
      
     
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }, 500);

    
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ToastContainer />
      <CircularProgress />
      <h5 className="mt-3">Processing Order...</h5>
    </div>
  );
}

export default CircularLoader;
