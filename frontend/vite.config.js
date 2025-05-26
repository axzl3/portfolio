import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default ({ mode }) => {
  //load environment variables
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    server: {
      port: Number(env.VITE_PORT),
    },
    plugins: [react(), tailwindcss()],
  });
};
