# React + Vite + Capacitor Boilerplate

## Dependencies

- [React](https://github.com/facebook/react)
- [Vite](https://github.com/vitejs/vite)
- [Vite TSConfig Paths](https://github.com/aleclarson/vite-tsconfig-paths)
- [Capacitor](https://github.com/ionic-team/capacitor)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Styled Reset](https://github.com/zacanger/styled-reset)
- [Typescript](https://github.com/microsoft/TypeScript)

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
brew install cocoapods
npm run ios:init
npm run ios
```

> Reference: https://capacitorjs.com/docs/ios#adding-the-ios-platform

Run Android: (Install [Android Studio](https://developer.android.com/studio) And Download SDK First)

```sh
npm run android:init
npm run android
```

> Reference: https://capacitorjs.com/docs/android#adding-the-android-platform

## License

This project is licensed under the [MIT](./LICENSE).
