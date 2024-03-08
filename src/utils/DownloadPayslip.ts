import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

async function downloadPayslip(url: string, fileName: string) {
  if (Capacitor.isNativePlatform()) {
    // For native iOS and Android
    try {
      const response = await fetch(url);
      console.log('response---', response)
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        await Filesystem.writeFile({
          path: fileName,
          data: base64data,
          directory: Directory.Documents,
          encoding: Encoding.UTF8,
        });
        console.log('File downloaded successfully');
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  } else {
    // For web
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

export default downloadPayslip
