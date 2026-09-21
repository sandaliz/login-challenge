import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function TokenPage() {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('accessToken');

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Authentication Successful
        </Typography>

        <Typography sx={{ mt: 2, color: 'text.secondary' }}>
          Your Google access token:
        </Typography>

        <Box
          sx={{
            mt: 3,
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            backgroundColor: '#f7f7f7',
            wordBreak: 'break-all',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
          }}
        >
          {accessToken || 'No access token found.'}
        </Box>

        <Button
          onClick={handleLogout}
          variant="contained"
          sx={{
            mt: 3,
            alignSelf: 'flex-start',
            backgroundColor: '#000000',
            '&:hover': {
              backgroundColor: '#222222',
            },
          }}
        >
          Back to Login
        </Button>
      </Box>
    </Container>
  );
}

export default TokenPage;
