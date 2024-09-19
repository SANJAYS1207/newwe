import React from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4, // Reduced marginTop to move the form closer to the top
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            border: '1px solid #ccc',
            padding: 4,
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;