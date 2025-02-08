import type { NextConfig } from "next";
import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  
};

export default nextConfig;
