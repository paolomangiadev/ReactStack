var config = {};

config.serverPort = process.env.WEB_PORT || 3000;

config.mongo = {
  uri: 'mongodb://localhost/reactstack',
  options: {
    db: {
      safe: true
    }
  }
}

config.gmail = {
  user: 'paolo.mangia.dev@gmail.com',
  clientId: '564267506738-1303vkp6mf551jkm9bn0colvsnp9qhia.apps.googleusercontent.com',
  clientSecret: 'JRL4yRWl1N1nlPzdpevx82D7',
  refreshToken: '1/2bCP8_m3wx-a18xRm-V7gl2JuTEpgdOko4BxFtO1AGw',
  accessToken: 'ya29.GlteBJ9ExM39tAMmdDw1wpgrmjKCz7Rlp12SknEmnzkvmx2KCtb4VMJLaDj0FL_tR5OUV-jtA_rm5Qhr_mXU6aZ4YJbkN9AG3hC4EeiQf-Rcp0oiW4GfszPgxC1T'
}

export default config;
