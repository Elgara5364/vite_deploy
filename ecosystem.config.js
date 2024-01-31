{
  apps[
    {
      name: "vite-deploy",

      script: "start",

      interpreter: "none",

      args: "start ",
      PM2_SERVE_PATH: "./dist",
      PM2_SERVE_PORT: 5173,
      PM2_SERVE_SPA: "true",
    }
  ];
}
