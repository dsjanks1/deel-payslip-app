
# Deel Payslip App

Payslips Cross Platform Application

## Prerequisites

- **Node.js**: You need Node.js installed to run the project and manage its dependencies. Download it from [nodejs.org](https://nodejs.org/).
- **npm**: Comes with Node.js. Used to manage the project's packages.
- **Xcode**: For iOS development, Xcode is required. Install it from the Mac App Store.
- **Android Studio**: For Android development, Android Studio is needed. Download it from [developer.android.com](https://developer.android.com/studio).

## Installation

To install the project, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/dsjanks1/deel-payslip-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd deel-payslip-app
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

## Running the Project

### Running Locally on the Web

To run the project on your local web server, execute:

```bash
npm start
```

This command will start a development server. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Running on iOS

Before running the app on an iOS device or simulator, ensure you've installed the iOS platform for your project:

```bash
npx cap add ios
```
To run via cli and not open Xcode:

```bash
npx cap run ios -l --external
```

To open your project in Xcode and run it on an iOS device or simulator:

```bash
npx cap open ios
```

In Xcode, select your target device from the device dropdown near the play button, then click the play button or press `Cmd + R` to build and run the app.

### Running on Android

Before running the app on an Android device or emulator, ensure you've installed the Android platform for your project:

```bash
npx cap add android
```
o run via cli and not open Android Studio:

```bash
npx cap run android -l --external
```

To open your project in Android Studio and run it on an Android device or emulator:

```bash
npx cap open android
```

In Android Studio, select your target device from the device dropdown and click the run button or press `Shift + F10` to build and run the app.




## TODOS

1. On the payslipList page, I should have made the text: Your Payslips fixed to the top of the page and made the payslips scrollable not the entire page
2. Native download of PDF not working. Would spend more time debugging
3. Could preview the payslip pdf on the payslip details page