import { tsImport } from "tsx/esm/api"

await tsImport("./env/validateEnv.ts", import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
