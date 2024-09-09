# Project Name or App Name

## Description

A brief description of your project, explaining its purpose and key features. Include any relevant details about the technologies or frameworks used.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Requirements

Node 14 or greater is required. Development for iOS requires a Mac and Xcode 12 or up, and will target iOS 12 and up.

You also need to install the dependencies required by React Native.
Go to the React Native environment setup, then select React Native CLI Quickstart tab.
Follow instructions for your given development OS and target OS.

## Installation

- npm / yarn install
- npm / yarn start to start the metro bundler, in a dedicated terminal
- for iOS you have install pod files; cd ios && pod install
- for Android clean gradle file; cd android && ./gradlew clean

## Usage

Provide instructions on how to run or build the project. Include any necessary command line instructions or configuration steps.

- npm / yarn run

## Features

List the key features of your app. Highlight the functionalities that make it unique or stand out from other similar apps.

- Feature 1: Description
- Feature 2: Description

## Screenshots

If applicable, include screenshots or GIFs of your app to showcase its user interface or demonstrate specific features. This visual representation can make your README more engaging.

## Dependencies

The project contains:

- A React Native (v0.72.0) application (in "ejected" mode to allow using dependencies that rely on native code)
- Redux (v4.2.1) to help manage state
- Redux Persist (v6.0.0) to persist the Redux state
- React Navigation (v6) to handle routing and navigation in the app, with a splash screen setup by default
- Redux Toolkit (v1.9.5) to make redux easier
- RTK query (v0.21.4) to make API calls
- prettier and eslint preconfigured for React Native
- react-native-flipper (v0.203.0) to debug react-native and redux-flipper (v2.0.2) to debug redux

The boilerplate includes an example (displaying fake user data) from UI components to the business logic. The example is easy to remove so that it doesn't get in the way.

## Redux store 🗃️

This boilerplate use Redux-Toolkit and RTKQuery to deal with business side. We use them because they are often used by the community, very trendy and easy to debug.

RTKQuery is a powerful data fetching and caching tool. So we using it for asynchronous api calls.

Redux-Toolkit is intended to be the standard way to write Redux logic. So we using it for synchronous operations.

## Contributing

Explain how other developers can contribute to your project. Include guidelines for submitting pull requests, reporting issues, or suggesting new features.

Fork the repository.
Create a new branch: git checkout -b feature/branch-name.
Make changes and commit them: git commit -m 'Add some feature'.
Push the branch: git push origin feature/branch-name.
Open a pull request.

## License

Specify the license under which your project is distributed. For example:

This project is licensed under the MIT License.
