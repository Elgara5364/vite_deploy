module.exports = {
  apps: [
    {
      name: "vite-deploy",
      script: "npx",
      interpreter: "none",
      args: "serve -s build -p 5173",
    },
  ],
};
