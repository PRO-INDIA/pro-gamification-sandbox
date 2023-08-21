import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version,

  production: false,
  baseUrl: 'https://gamifyapi.theproindia.com',
  blobEndpoint: 'https://prodgamificationui.blob.core.windows.net',
  containerName: 'sandbox-assets',
  clientId: 'f9f95520-89d4-43b0-a326-affe40ff27f1',
  clientSecret: 'pon8Q~dc-.o1wk~arnP6r9r3Zq8ls2emlMY1JbrW',
  //Paste Your Application Code
  gamification: {
    userId: 'c7a09cc4-76e0-492c-b969-cd5c7a069ed0',
    gameId: '648967f30c6b3d35b04b1c73',
    applicationId: '648967f30c6b3d1d0b4b1c67',
  },
};
