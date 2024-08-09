# Changelog

## [1.3.0](https://github.com/worldcoin/idkit-js/compare/core-v1.2.2...core-v1.3.0) (2024-08-09)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* validate bridge_url ([#232](https://github.com/worldcoin/idkit-js/issues/232)) ([24686c7](https://github.com/worldcoin/idkit-js/commit/24686c7d32b402d6a56593678935ab1a40eba7d1))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))
* release 1.1.4 ([#236](https://github.com/worldcoin/idkit-js/issues/236)) ([2165583](https://github.com/worldcoin/idkit-js/commit/2165583fd0847b5fdc86289c9d7b8c5d412b6b84))
* release 1.2.1 ([#264](https://github.com/worldcoin/idkit-js/issues/264)) ([4294b6d](https://github.com/worldcoin/idkit-js/commit/4294b6d31ff68e8673b7f408259084b53f097a16))
* release 1.2.2 ([#266](https://github.com/worldcoin/idkit-js/issues/266)) ([5ffcf53](https://github.com/worldcoin/idkit-js/commit/5ffcf53b5268592d8f9535c93c1ebd8df632f022))

## [1.2.2](https://github.com/worldcoin/idkit-js/compare/core-v1.2.2...core-v1.2.2) (2024-07-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* validate bridge_url ([#232](https://github.com/worldcoin/idkit-js/issues/232)) ([24686c7](https://github.com/worldcoin/idkit-js/commit/24686c7d32b402d6a56593678935ab1a40eba7d1))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))
* release 1.1.4 ([#236](https://github.com/worldcoin/idkit-js/issues/236)) ([2165583](https://github.com/worldcoin/idkit-js/commit/2165583fd0847b5fdc86289c9d7b8c5d412b6b84))
* release 1.2.1 ([#264](https://github.com/worldcoin/idkit-js/issues/264)) ([4294b6d](https://github.com/worldcoin/idkit-js/commit/4294b6d31ff68e8673b7f408259084b53f097a16))
* release 1.2.2 ([#266](https://github.com/worldcoin/idkit-js/issues/266)) ([5ffcf53](https://github.com/worldcoin/idkit-js/commit/5ffcf53b5268592d8f9535c93c1ebd8df632f022))

## [1.2.2](https://github.com/worldcoin/idkit-js/compare/core-v1.2.1...core-v1.2.2) (2024-07-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* validate bridge_url ([#232](https://github.com/worldcoin/idkit-js/issues/232)) ([24686c7](https://github.com/worldcoin/idkit-js/commit/24686c7d32b402d6a56593678935ab1a40eba7d1))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))
* release 1.1.4 ([#236](https://github.com/worldcoin/idkit-js/issues/236)) ([2165583](https://github.com/worldcoin/idkit-js/commit/2165583fd0847b5fdc86289c9d7b8c5d412b6b84))
* release 1.2.1 ([#264](https://github.com/worldcoin/idkit-js/issues/264)) ([4294b6d](https://github.com/worldcoin/idkit-js/commit/4294b6d31ff68e8673b7f408259084b53f097a16))
* release 1.2.2 ([#266](https://github.com/worldcoin/idkit-js/issues/266)) ([5ffcf53](https://github.com/worldcoin/idkit-js/commit/5ffcf53b5268592d8f9535c93c1ebd8df632f022))

## [1.2.1](https://github.com/worldcoin/idkit-js/compare/core-v1.2.1...core-v1.2.1) (2024-07-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* validate bridge_url ([#232](https://github.com/worldcoin/idkit-js/issues/232)) ([24686c7](https://github.com/worldcoin/idkit-js/commit/24686c7d32b402d6a56593678935ab1a40eba7d1))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))
* release 1.1.4 ([#236](https://github.com/worldcoin/idkit-js/issues/236)) ([2165583](https://github.com/worldcoin/idkit-js/commit/2165583fd0847b5fdc86289c9d7b8c5d412b6b84))
* release 1.2.1 ([#264](https://github.com/worldcoin/idkit-js/issues/264)) ([4294b6d](https://github.com/worldcoin/idkit-js/commit/4294b6d31ff68e8673b7f408259084b53f097a16))

## [1.2.1](https://github.com/worldcoin/idkit-js/compare/core-v1.2.0...core-v1.2.1) (2024-07-09)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* validate bridge_url ([#232](https://github.com/worldcoin/idkit-js/issues/232)) ([24686c7](https://github.com/worldcoin/idkit-js/commit/24686c7d32b402d6a56593678935ab1a40eba7d1))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))
* release 1.1.4 ([#236](https://github.com/worldcoin/idkit-js/issues/236)) ([2165583](https://github.com/worldcoin/idkit-js/commit/2165583fd0847b5fdc86289c9d7b8c5d412b6b84))

## [1.2.0](https://github.com/worldcoin/idkit-js/compare/core-v1.1.4...core-v1.2.0) (2024-03-29)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* validate bridge_url ([#232](https://github.com/worldcoin/idkit-js/issues/232)) ([24686c7](https://github.com/worldcoin/idkit-js/commit/24686c7d32b402d6a56593678935ab1a40eba7d1))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))
* release 1.1.4 ([#236](https://github.com/worldcoin/idkit-js/issues/236)) ([2165583](https://github.com/worldcoin/idkit-js/commit/2165583fd0847b5fdc86289c9d7b8c5d412b6b84))

## [1.1.4](https://github.com/worldcoin/idkit-js/compare/core-v1.1.3...core-v1.1.4) (2024-01-26)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* validate bridge_url ([#232](https://github.com/worldcoin/idkit-js/issues/232)) ([24686c7](https://github.com/worldcoin/idkit-js/commit/24686c7d32b402d6a56593678935ab1a40eba7d1))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))
* release 1.1.4 ([#236](https://github.com/worldcoin/idkit-js/issues/236)) ([2165583](https://github.com/worldcoin/idkit-js/commit/2165583fd0847b5fdc86289c9d7b8c5d412b6b84))

## [1.1.3](https://github.com/worldcoin/idkit-js/compare/core-v1.1.2...core-v1.1.3) (2024-01-03)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))

## [1.1.2](https://github.com/worldcoin/idkit-js/compare/core-v1.1.1...core-v1.1.2) (2024-01-02)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))
* release 1.1.2 ([#228](https://github.com/worldcoin/idkit-js/issues/228)) ([2225e5f](https://github.com/worldcoin/idkit-js/commit/2225e5ff35123ac52c9f59c3131938bda305b310))

## [1.1.1](https://github.com/worldcoin/idkit-js/compare/core-v1.1.0...core-v1.1.1) (2023-12-13)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))
* release 1.1.1 ([#220](https://github.com/worldcoin/idkit-js/issues/220)) ([5d3648c](https://github.com/worldcoin/idkit-js/commit/5d3648c6c4de3b4a81d2caeb41ea9e4afaa570a4))

## [1.1.0](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0...core-v1.1.0) (2023-12-11)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))

## [1.0.0](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.7...core-v1.0.0) (2023-12-11)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0 ([#213](https://github.com/worldcoin/idkit-js/issues/213)) ([9148a23](https://github.com/worldcoin/idkit-js/commit/9148a23afea5f78666b98dfd8601a2bf6c5bcca6))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))

## [1.0.0-alpha.7](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.6...core-v1.0.0-alpha.7) (2023-12-11)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* Add CJS export for core ([#208](https://github.com/worldcoin/idkit-js/issues/208)) ([be6c426](https://github.com/worldcoin/idkit-js/commit/be6c426eb007796fc23c7ea8368ebf572f7dd22b))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))

## [1.0.0-alpha.6](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.5...core-v1.0.0-alpha.6) (2023-12-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))

## [1.0.0-alpha.5](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.4...core-v1.0.0-alpha.5) (2023-12-07)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))

## [1.0.0-alpha.4](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.3...core-v1.0.0-alpha.4) (2023-12-01)


### ⚠ BREAKING CHANGES

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))

## [1.0.0-alpha.3](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.2...core-v1.0.0-alpha.3) (2023-12-01)


### ⚠ BREAKING CHANGES

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))

## [1.0.0-alpha.2](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.1...core-v1.0.0-alpha.2) (2023-11-30)


### ⚠ BREAKING CHANGES

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))

## [1.0.0-alpha.1](https://github.com/worldcoin/idkit-js/compare/core-v1.0.0-alpha.0...core-v1.0.0-alpha.1) (2023-11-27)


### ⚠ BREAKING CHANGES

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
