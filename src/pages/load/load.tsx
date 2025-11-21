import * as React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { time } from 'console';
import { CircularProgress } from '@mui/material';

export default function LoadingButtons() {
  return (
    <Stack spacing={2}>

      <Button
        fullWidth
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Full width
      </Button>

      <CircularProgress
        color="secondary"
        variant='indeterminate'
        value={100}
        size={100}
        thickness={3.6}
        disableShrink={false}

      />
    </Stack>
  );
}
