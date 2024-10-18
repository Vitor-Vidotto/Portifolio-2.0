/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Se você deseja exportar como um site estático
    experimental: {
      appDir: true, // Habilitar App Directory se você estiver usando Next.js 13+
    },
    telemetry: false, // Desativar a coleta de dados anônimos
  };
  
  export default nextConfig;
  