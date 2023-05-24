# 🧩 React + Vite + Capacitor Boilerplate

|Web|Android|iOS|
|------|---|---|
|<img height="400" alt="image" src="https://github.com/rhea-so-lab/react-vite-capacitor-boilerplate/assets/25793226/776cbdce-8ea5-4ec0-b565-d1d4efd68b47">|<img height="400" alt="image" src="https://github.com/rhea-so-lab/react-vite-capacitor-boilerplate/assets/25793226/d83721e7-7941-48bf-b68a-597c9c608305">|<img height="400" alt="image" src="https://github.com/rhea-so-lab/react-vite-capacitor-boilerplate/assets/25793226/ef0d301b-4505-4173-a32b-a91bdf9c0573">|
  
## Dependencies

- [React](https://github.com/facebook/react)
- [Vite](https://github.com/vitejs/vite)
- [Vite TSConfig Paths](https://github.com/aleclarson/vite-tsconfig-paths)
- [Capacitor](https://github.com/ionic-team/capacitor)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Styled Reset](https://github.com/zacanger/styled-reset)
- [Typescript](https://github.com/microsoft/TypeScript)

## Preparation

- [Homebrew](https://brew.sh/)

## Getting Started

Clone this repository:

```sh
git clone git@github.com:rhea-so-lab/react-vite-capacitor-boilerplate.git my-project
cd my-project
```

Install dependencies:

```sh
npm install
```

Run Web:

```sh
npm run dev
```

Run iOS: (Install [XCode](https://developer.apple.com/kr/xcode/) First)

```sh
xcode-select --install
# Update Software in MacOS System Settings
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
brew install cocoapods
npm run ios:init
npm run ios
```

> Reference: https://capacitorjs.com/docs/ios#adding-the-ios-platform

Run Android: (Install [Android Studio](https://developer.android.com/studio) And Download SDK in SDK Manager And [Creating a Virtual Device](https://developer.android.com/studio/run/managing-avds))

```sh
brew install openjdk@17 && echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
brew install gradle
npm run android:init
# Wait Some Minutes.. For Android Studio Build ...
npm run android
```

> Reference: https://capacitorjs.com/docs/android#adding-the-android-platform

## License

This project is licensed under the [MIT](./LICENSE).
