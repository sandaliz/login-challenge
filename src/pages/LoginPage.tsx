import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import {
  Visibility,
  VisibilityOff,
  Apple,
  Facebook,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import GoogleButton from '../components/GoogleButton';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let valid = true;

    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError(
        'Password must be at least 6 characters',
      );
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // No backend login is required for this challenge.
    console.log('Login form submitted');
  };

  const handleGoogleLogin = (accessToken: string) => {
    sessionStorage.setItem('accessToken', accessToken);

    navigate('/token');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        backgroundColor: '#ffffff',

        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      {/* =========================
          LEFT SIDE - LOGIN
      ========================== */}

      <Box
        sx={{
          width: {
            xs: '100%',
            md: '48%',
          },

          minHeight: {
            xs: 'auto',
            md: '100vh',
          },

          display: 'flex',
          flexDirection: 'column',

          justifyContent: {
            xs: 'flex-start',
            md: 'center',
          },

          alignItems: 'center',

          px: {
            xs: 3,
            sm: 5,
            md: 6,
            lg: 9,
          },

          py: {
            xs: 6,
            md: 5,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 500,
          }}
        >
          {/* Heading */}

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem',
              },

              fontWeight: 700,
              lineHeight: 1.15,

              textAlign: {
                xs: 'center',
                md: 'left',
              },

              color: '#050505',
            }}
          >
            Welcome back!
          </Typography>

          <Typography
            sx={{
              mt: 2,

              fontSize: {
                xs: '0.9rem',
                md: '1rem',
              },

              lineHeight: 1.55,

              color: '#666666',

              maxWidth: 430,

              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            Simplify your workflow and boost your productivity
            with Tuga&apos;s App. Get started for free.
          </Typography>

          {/* Form */}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: {
                xs: 4,
                md: 7,
              },
            }}
          >
            {/* Email */}

            <TextField
              fullWidth
              placeholder="Username"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);

                if (emailError) {
                  setEmailError('');
                }
              }}
              error={Boolean(emailError)}
              helperText={emailError}
              autoComplete="email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: 62,
                  borderRadius: '32px',

                  '& fieldset': {
                    borderColor: '#BDBDBD',
                    borderWidth: 1.5,
                  },

                  '&:hover fieldset': {
                    borderColor: '#999999',
                  },

                  '&.Mui-focused fieldset': {
                    borderColor: '#111111',
                  },
                },

                '& .MuiInputBase-input': {
                  px: 3,
                  fontSize: '1rem',
                },
              }}
            />

            {/* Password */}

            <TextField
              fullWidth
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);

                if (passwordError) {
                  setPasswordError('');
                }
              }}
              error={Boolean(passwordError)}
              helperText={passwordError}
              autoComplete="current-password"
              sx={{
                mt: 1.5,

                '& .MuiOutlinedInput-root': {
                  height: 62,
                  borderRadius: '32px',

                  '& fieldset': {
                    borderColor: '#BDBDBD',
                    borderWidth: 1.5,
                  },

                  '&:hover fieldset': {
                    borderColor: '#999999',
                  },

                  '&.Mui-focused fieldset': {
                    borderColor: '#111111',
                  },
                },

                '& .MuiInputBase-input': {
                  px: 3,
                  fontSize: '1rem',
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        edge="end"
                        aria-label={
                          showPassword
                            ? 'Hide password'
                            : 'Show password'
                        }
                        sx={{
                          mr: 1.5,
                          color: '#999999',
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* Forgot password */}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: 1,
              }}
            >
              <Link
                href="#"
                underline="none"
                sx={{
                  fontSize: '0.9rem',
                  color: '#333333',

                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            {/* Login button */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,

                height: 62,

                borderRadius: '32px',

                backgroundColor: '#000000',

                fontSize: '1rem',

                '&:hover': {
                  backgroundColor: '#222222',
                },
              }}
            >
              Login
            </Button>
          </Box>

          {/* Divider */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              my: 4,
            }}
          >
            <Divider sx={{ flex: 1 }} />

            <Typography
              sx={{
                color: '#333333',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
              }}
            >
              or continue with
            </Typography>

            <Divider sx={{ flex: 1 }} />
          </Box>

          {/* Social buttons */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {/* Google */}

            <GoogleButton
              onLogin={handleGoogleLogin}
            />

            {/* Apple */}

            <IconButton
              aria-label="Apple login"
              sx={{
                width: 70,
                height: 70,

                backgroundColor: '#000000',

                color: '#ffffff',

                '&:hover': {
                  backgroundColor: '#222222',
                },
              }}
            >
              <Apple sx={{ fontSize: 32 }} />
            </IconButton>

            {/* Facebook */}

            <IconButton
              aria-label="Facebook login"
              sx={{
                width: 70,
                height: 70,

                backgroundColor: '#000000',

                color: '#ffffff',

                '&:hover': {
                  backgroundColor: '#222222',
                },
              }}
            >
              <Facebook sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>

          {/* Register */}

          <Box
            sx={{
              mt: {
                xs: 6,
                md: 13,
              },

              textAlign: 'center',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '0.95rem',
                color: '#333333',
              }}
            >
              Not a member?{' '}
            </Typography>

            <Link
              href="#"
              underline="none"
              sx={{
                fontSize: '0.95rem',

                color: '#7BA37B',

                fontWeight: 600,

                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Register now
            </Link>
          </Box>
        </Box>
      </Box>

      {/* =========================
          RIGHT SIDE - IMAGE
      ========================== */}

      <Box
        sx={{
          width: {
            xs: '100%',
            md: '52%',
          },

          minHeight: {
            xs: 400,
            sm: 500,
            md: 'calc(100vh - 32px)',
          },

          m: {
            xs: 2,
            md: 2,
          },

          mt: {
            xs: 0,
            md: 2,
          },

          borderRadius: {
            xs: 4,
            md: 5,
          },

          backgroundColor: '#F1EEFF',

          display: 'flex',

          flexDirection: 'column',

          alignItems: 'center',

          justifyContent: 'center',

          overflow: 'hidden',

          p: {
            xs: 4,
            md: 6,
          },
        }}
      >
        {/* Illustration */}

        <Box
          component="img"
          src="/illustration.png"
          alt="Productivity illustration"
          sx={{
            width: {
              xs: '70%',
              sm: '55%',
              md: '75%',
            },

            maxWidth: 500,

            maxHeight: {
              xs: 300,
              md: 480,
            },

            objectFit: 'contain',
          }}
        />

        {/* Dots */}

        <Box
          sx={{
            display: 'flex',
            gap: 1,

            mt: {
              xs: 3,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#D6D6D6',
            }}
          />

          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#D6D6D6',
            }}
          />

          <Box
            sx={{
              width: 24,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#000000',
            }}
          />
        </Box>

        {/* Right-side text */}

        <Typography
          sx={{
            mt: 4,

            maxWidth: 600,

            textAlign: 'center',

            fontSize: {
              xs: '1.5rem',
              sm: '1.8rem',
              md: '2rem',
            },

            lineHeight: 1.35,

            color: '#111111',
          }}
        >
          Make your work easier and organized
          <br />
          with{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 700,
            }}
          >
            Tuga&apos;s App
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
