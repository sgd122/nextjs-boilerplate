module.exports = {
  ci: {
    collect: {
      // staticDistDir: './next',
      // url: ['http://localhost:3000/'],
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      url: ['http://localhost:3000'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
