# Github Search

​

## Setup

​

#### Requirements

​

- Node 10+
- Yarn
- Xcode (and Command Line Tools)
  ​
  See [React Native - Getting Started](http://facebook.github.io/react-native/docs/getting-started.html)
  ​

#### Setup

​

- `yarn install`
- `yarn run ios` (to start iOS Simulator)
- `yarn run android` (to start Android Emulator)
  ​

## Project Structure

​

```
src/                   <- project workspace
src/components         <- dumb components
src/context            <- project providers
src/hooks              <- custom hooks
src/containers         <- smart components (i.e. data fetchers)
src/utils              <- helper functions
src/navigators         <- react-navigation navigators
```

​

## Prettier

​
This project uses [Prettier](http://prettier.io/) to format code. Please make sure you have the plugin installed for your editor and configured it to format on save. There is a git commit hook to format code as well.

# Considerations

- React navigation 5 test config for integration with @testing-library/react-native is in the process of updating with major release. Current config breaks test suite, will update when issues resolved to properly test navigators.
