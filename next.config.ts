/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Obligatoire pour GitHub Pages
  basePath: '/dev-portfolio', // ⚠️ Le nom de ton dépôt GitHub
  images: {
    unoptimized: true, // Obligatoire car GitHub Pages n'optimise pas les images
  },
};

export default nextConfig;