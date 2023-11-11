# Lab Assignment 1: Spinning Up React Native App

## System requirements: 
    **Operating System:** Windows 10 or higher
    **CPU:** Intel Core i5 or equivalent processor 
    **RAM:** 8 GB or higher (or specify the size of your RAM)

## Installation instructions: 
    1.	Go to the "React Native: Setting up the development environment" page. Select "React Native CLI Quickstart" -> 'Windows' as the Development OS and 'Android' as the Target OS. Follow the instructions on the page [2].
    2.	Install Chocolatey [4] by running the following command as an administrator (right-click on CMD and choose "Run as Administrator") in the terminal:
            @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    3.	Install Node.js and JDK by running the following command [4]:
            choco install -y nodejs-lts microsoft-openjdk11
    4.	Install Android Studio. After installing, ensure Android SDK, Android SDK Platform, Android Virtual Device (AVD) are selected.
    5.	Install the latest version of Gradle [5] to avoid any building problems later on. Please refer to the ‘Resources’ links to download.

## Configuration steps: 
    1.	Open the Windows Control Panel. Navigate to User Accounts -> Change my environment variables -> Add a new system environment variable named ANDROID_HOME with the path to the Android SDK (e.g., %LOCALAPPDATA%\Android\Sdk).
    2.	Add the path to the platform-tools folder and Gradle bin directory to the Path variable.

## Project creation: 
    1.	Navigate to the chosen folder in the terminal:
            cd [replace-with-path-to-folder]
    2.	To create a new project, enter the following in the terminal:
            npx react-native@latest init [replace-with-name-of-project]


## Running the project: 
    1.	To run the project, navigate to the project folder:
            cd [replace-with-path-to-project-folder]
    2.	Start Metro by entering:
    npm start
    3.	Run on Android by entering:
            a

    OR

    1.	Open Android Studio and click on the play icon in the Device Manager.

## Troubleshooting: 
    •	To avoid build failures, ensure the latest Gradle version is present in the path, and necessary permissions are granted. Go back to the installation and configuration steps if needed. Missing a step could lead to a "build failed" error when running the project.

## Resources: 
    [1] Microsoft Teams. [Link Text](https://mysait.sharepoint.com/:f:/r/sites/Fall2023-MobileAppDevelopmentCPRG303-A/Shared%20Documents/Course%20Materials/React%20Native%20Setup?csf=1&web=1&e=AbO1Xi)
    [2] “Setting up the development environment · React Native,” reactnative.dev, Aug. 29, 2023. [Link Text](https://reactnative.dev/docs/environment-setup?guide=native)
    [3] “Create and manage virtual devices  |  Android Developers,” Android Developers, 2019. [Link Text](https://developer.android.com/studio/run/managing-avds)
    [4] “Chocolatey Software Docs | Setup / Install,” Chocolatey Software. [Link Text](https://docs.chocolatey.org/en-us/choco/setup#more-install-options)
    [5] “Gradle | Installation,” Gradle, Nov. 03, 2023. [Link Text](https://gradle.org/install/)