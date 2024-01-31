module.exports = {
  apps: [
    {
      name: "vite_deploy",

      script: "npx",

      interpreter: "none",

      args: "serve -s build -p 5173",
    },
  ],
};
