import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const SuccessAlert = ({ showSuccess }) => {
  return (
    <>
      {showSuccess && (
        <Stack sx={{ width: '30%', position: 'fixed', top: 10, right: 20, zIndex: 10 }} spacing={2}>
          <Alert severity="success">Item added to cart successfully!</Alert>
        </Stack>
      )}
    </>
  );
}

export default SuccessAlert;
