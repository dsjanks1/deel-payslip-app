import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.payslip.app',
  appName: 'deel-payslip-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
