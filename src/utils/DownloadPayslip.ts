import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

async function downloadPayslip(url: string, fileName: string) {
  // const nativeUrl = Capacitor.convertFileSrc(url); // Convert URL for native access

  // TODO: Native download not working
  if (Capacitor.isNativePlatform()) {
    // For native iOS and Android
    try {
           // Use the Fetch API to download the file's content.
           const response = await fetch(url);
           const blob = await response.blob();
     
           // Convert the Blob into a base64 string.
           const reader = new FileReader();
           reader.onloadend = async () => {
             const base64data = reader.result?.toString().split(',')[1] as string; // Remove the data url prefix
     
             // Save the file using the Filesystem API.
             const savedFile = await Filesystem.writeFile({
               path: `payslips/${fileName}`,
               data: base64data,
               directory: Directory.Documents, // Adjust based on where you want to save
               recursive: true, // Automatically create the 'payslips' directory if it doesn't exist
             });
     
             console.log('File saved successfully:', savedFile.uri);
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
