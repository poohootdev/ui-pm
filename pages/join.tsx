import { LoadingButton } from '@mui/lab';
import { Alert, Box, Container, Grid, TextField, Typography } from '@mui/material';
import type { NextPage } from 'next';
import SendIcon from '@mui/icons-material/Send';
import Head from 'next/head';

const Join: NextPage = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <Head>
        <title>UI-PM | 📋 회원가입</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Box sx={{ boxShadow: 10, borderRadius: 2 }}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, ml: 3, mr: 3, mb: 3 }}
            >
              <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                📋 회원가입
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField name="name" required fullWidth label="이름" autoFocus />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="id(email)"
                    required
                    fullWidth
                    label="아이디(이메일)"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="password" required fullWidth label="비밀번호" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="confirmPassword"
                    required
                    fullWidth
                    label="비밀번호 확인"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Alert sx={{ mt: 3 }} severity="error">
                에러 메시지
              </Alert>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, minHeight: 50 }}
                endIcon={<SendIcon />}
              >
                가입하기
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Join;
