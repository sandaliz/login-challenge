import { useState } from 'react';

import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '../firebase/config';

import {
  IconButton,
  CircularProgress,
} from '@mui/material';

import { Google } from '@mui/icons-material';

interface GoogleButtonProps {
  onLogin: (accessToken: string) => void;
}

function GoogleButton({
  onLogin,
}: GoogleButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(
        auth,
        provider,
      );

      const credential =
        GoogleAuthProvider.credentialFromResult(result);

      const accessToken = credential?.accessToken;

      if (!accessToken) {
        throw new Error(
          'Unable to retrieve Google access token',
        );
      }

      onLogin(accessToken);
    } catch (error) {
      console.error(
        'Google authentication failed:',
        error,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <IconButton
      onClick={handleGoogleLogin}
      disabled={loading}
      aria-label="Continue with Google"
      sx={{
        width: 70,
        height: 70,

        backgroundColor: '#000000',

        color: '#ffffff',

        '&:hover': {
          backgroundColor: '#222222',
        },

        '&.Mui-disabled': {
          backgroundColor: '#000000',
          color: '#ffffff',
        },
      }}
    >
      {loading ? (
        <CircularProgress
          size={26}
          sx={{ color: '#ffffff' }}
        />
      ) : (
        <Google sx={{ fontSize: 30 }} />
      )}
    </IconButton>
  );
}

export default GoogleButton;