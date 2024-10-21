import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlreadyAdded = ({ alreadyAdded }) => {
  return (
    <>
      {alreadyAdded && (
        <Stack sx={{ width: '30%',  position: 'fixed', top: 10, right:20, zIndex: 10 }} spacing={2}>
          <Alert severity="info">This item is already in the cart!</Alert>
        </Stack>
      )}
    </>
  );
}

export default AlreadyAdded;
