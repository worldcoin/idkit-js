# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.3.0](https://github.com/worldcoin/idkit-js/compare/react-v1.2.2...react-v1.3.0) (2024-08-09)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* standalone improvements and widget mobile compatibility ([#272](https://github.com/worldcoin/idkit-js/issues/272)) ([bf63d94](https://github.com/worldcoin/idkit-js/commit/bf63d943f01ee9dc145271c8979ee6d68807bda9))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* error message width ([#234](https://github.com/worldcoin/idkit-js/issues/234)) ([8cbb64f](https://github.com/worldcoin/idkit-js/commit/8cbb64fbaabdad94431ca7e2dc6b93bee4c21a8a))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.3.0

## [1.2.2](https://github.com/worldcoin/idkit-js/compare/react-v1.2.2...react-v1.2.2) (2024-07-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* error message width ([#234](https://github.com/worldcoin/idkit-js/issues/234)) ([8cbb64f](https://github.com/worldcoin/idkit-js/commit/8cbb64fbaabdad94431ca7e2dc6b93bee4c21a8a))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.2.2

## [1.2.2](https://github.com/worldcoin/idkit-js/compare/react-v1.2.1...react-v1.2.2) (2024-07-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* error message width ([#234](https://github.com/worldcoin/idkit-js/issues/234)) ([8cbb64f](https://github.com/worldcoin/idkit-js/commit/8cbb64fbaabdad94431ca7e2dc6b93bee4c21a8a))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.2.2

## [1.2.1](https://github.com/worldcoin/idkit-js/compare/react-v1.2.1...react-v1.2.1) (2024-07-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* error message width ([#234](https://github.com/worldcoin/idkit-js/issues/234)) ([8cbb64f](https://github.com/worldcoin/idkit-js/commit/8cbb64fbaabdad94431ca7e2dc6b93bee4c21a8a))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.2.1

## [1.2.1](https://github.com/worldcoin/idkit-js/compare/react-v1.2.0...react-v1.2.1) (2024-07-09)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* error message width ([#234](https://github.com/worldcoin/idkit-js/issues/234)) ([8cbb64f](https://github.com/worldcoin/idkit-js/commit/8cbb64fbaabdad94431ca7e2dc6b93bee4c21a8a))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* package vulnerability ([#258](https://github.com/worldcoin/idkit-js/issues/258)) ([6448840](https://github.com/worldcoin/idkit-js/commit/644884083197a0f7bd29b5f58b6cc14a31f27926))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.2.1

## [1.2.0](https://github.com/worldcoin/idkit-js/compare/react-v1.1.4...react-v1.2.0) (2024-03-29)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* enforce non-empty string for action in IDKit ([#242](https://github.com/worldcoin/idkit-js/issues/242)) ([2087544](https://github.com/worldcoin/idkit-js/commit/208754427ca9d2864a9694f1ed93a246ea18ceab))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))
* verifyCloudProof function ([#240](https://github.com/worldcoin/idkit-js/issues/240)) ([c4a2821](https://github.com/worldcoin/idkit-js/commit/c4a2821982a224e446da6ae4eb62798667a2ee5f))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* bump zustand to ^4.5 ([#239](https://github.com/worldcoin/idkit-js/issues/239)) ([c09adb1](https://github.com/worldcoin/idkit-js/commit/c09adb1e1e6a95032173a355bfbd10a78c13cef5))
* error message width ([#234](https://github.com/worldcoin/idkit-js/issues/234)) ([8cbb64f](https://github.com/worldcoin/idkit-js/commit/8cbb64fbaabdad94431ca7e2dc6b93bee4c21a8a))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.2.0

## [1.1.4](https://github.com/worldcoin/idkit-js/compare/react-v1.1.3...react-v1.1.4) (2024-01-26)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* error message width ([#234](https://github.com/worldcoin/idkit-js/issues/234)) ([8cbb64f](https://github.com/worldcoin/idkit-js/commit/8cbb64fbaabdad94431ca7e2dc6b93bee4c21a8a))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.1.4

## [1.1.3](https://github.com/worldcoin/idkit-js/compare/react-v1.1.2...react-v1.1.3) (2024-01-03)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* remove return_to ([#230](https://github.com/worldcoin/idkit-js/issues/230)) ([1a2e004](https://github.com/worldcoin/idkit-js/commit/1a2e00448a9c9fde9ad19634308c4652661e621d))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.1.3

## [1.1.2](https://github.com/worldcoin/idkit-js/compare/react-v1.1.1...react-v1.1.2) (2024-01-02)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* Redirect Links from App after Verification ([#227](https://github.com/worldcoin/idkit-js/issues/227)) ([a594e48](https://github.com/worldcoin/idkit-js/commit/a594e4851857caae9e555258ccef61be4abb3438))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.1.2

## [1.1.1](https://github.com/worldcoin/idkit-js/compare/react-v1.1.0...react-v1.1.1) (2023-12-13)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* Added Return_To param to request URL  ([#219](https://github.com/worldcoin/idkit-js/issues/219)) ([c434d0f](https://github.com/worldcoin/idkit-js/commit/c434d0fa88914aaa030411fbbfee1e6c40ff35b2))
* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))
* width and centering text on success state ([#218](https://github.com/worldcoin/idkit-js/issues/218)) ([4b79213](https://github.com/worldcoin/idkit-js/commit/4b792133373ef40fc53faa488955f90478814d00))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.1.1

## [1.1.0](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0...react-v1.1.0) (2023-12-11)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* deprecate lite, add device ([#215](https://github.com/worldcoin/idkit-js/issues/215)) ([93b85f9](https://github.com/worldcoin/idkit-js/commit/93b85f90812c48504f0c67d390250b0fb8a51a27))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* slow down autoHide ([#216](https://github.com/worldcoin/idkit-js/issues/216)) ([b133ce9](https://github.com/worldcoin/idkit-js/commit/b133ce974a2b694e411db22aedb8e9e295519095))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.1.0

## [1.0.0](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.7...react-v1.0.0) (2023-12-11)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* final tweaks ([#212](https://github.com/worldcoin/idkit-js/issues/212)) ([3a16f1e](https://github.com/worldcoin/idkit-js/commit/3a16f1ee23d261e53af1cfeac3bea219237e4cd4))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* new mobile UI ([#211](https://github.com/worldcoin/idkit-js/issues/211)) ([0a859ac](https://github.com/worldcoin/idkit-js/commit/0a859acb8eb2db40c15a71cbc1c3a9d722f7bf4d))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0

## [1.0.0-alpha.7](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.6...react-v1.0.0-alpha.7) (2023-12-11)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* more design tweaks ([#206](https://github.com/worldcoin/idkit-js/issues/206)) ([1787b46](https://github.com/worldcoin/idkit-js/commit/1787b46e17c03a0ed090870c33dbcb0084273a28))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* minor copy fix ([#209](https://github.com/worldcoin/idkit-js/issues/209)) ([fcbc67c](https://github.com/worldcoin/idkit-js/commit/fcbc67c3f6dbe75798fdc340f07b7ed55035211c))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))
* release 1.0.0-alpha.7 ([#207](https://github.com/worldcoin/idkit-js/issues/207)) ([a844c9b](https://github.com/worldcoin/idkit-js/commit/a844c9b8bba671dbcb1466c61dc1eff3267c9433))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0-alpha.7

## [1.0.0-alpha.6](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.5...react-v1.0.0-alpha.6) (2023-12-10)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* font size robustness ([44c1a1f](https://github.com/worldcoin/idkit-js/commit/44c1a1ff1f23d4dfc3293163dadccd9d1932aa6d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* Improve DX for self-hosted use-cases ([#171](https://github.com/worldcoin/idkit-js/issues/171)) ([a6a5efd](https://github.com/worldcoin/idkit-js/commit/a6a5efd31aa2b8694cb3500787069bf6d192124e))
* refresh design ([#191](https://github.com/worldcoin/idkit-js/issues/191)) ([fe7d166](https://github.com/worldcoin/idkit-js/commit/fe7d166be8bd5a3cffc86e20bb02a0c4ce5d9596))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* return verification_level instead of credential_type ([#203](https://github.com/worldcoin/idkit-js/issues/203)) ([a6d52f0](https://github.com/worldcoin/idkit-js/commit/a6d52f02536b1efa9ab1da16eceac9edd44a69a4))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))
* Switch from credential types to verification level ([#202](https://github.com/worldcoin/idkit-js/issues/202)) ([9cbae6e](https://github.com/worldcoin/idkit-js/commit/9cbae6e2a043ccdd18d410412386c02fba6c8291))


### Bug Fixes

* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))
* release 1.0.0-alpha.6 ([ee9771d](https://github.com/worldcoin/idkit-js/commit/ee9771d869a90fcd13f7eed4c29af8ef573e355f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0-alpha.6

## [1.0.0-alpha.5](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.4...react-v1.0.0-alpha.5) (2023-12-07)


### ⚠ BREAKING CHANGES

* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* idkit state and error handling improvements ([#194](https://github.com/worldcoin/idkit-js/issues/194)) ([2e1157f](https://github.com/worldcoin/idkit-js/commit/2e1157f3835e2443a61e5e95b07919513ddf7717))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* expose IErrorState in react package ([#192](https://github.com/worldcoin/idkit-js/issues/192)) ([5531d8c](https://github.com/worldcoin/idkit-js/commit/5531d8c3c066bd0bb5826254f52febafdb32ac45))
* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* handle credential_types check when using default ([#197](https://github.com/worldcoin/idkit-js/issues/197)) ([984a190](https://github.com/worldcoin/idkit-js/commit/984a190da3c313789d1c3e2e2010f37cc937406d))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))
* release 1.0.0-alpha.5 ([#199](https://github.com/worldcoin/idkit-js/issues/199)) ([c81bbd2](https://github.com/worldcoin/idkit-js/commit/c81bbd2411d438afc6b90e4fdbdddcd14cba2ebf))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0-alpha.5

## [1.0.0-alpha.4](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.3...react-v1.0.0-alpha.4) (2023-12-01)


### ⚠ BREAKING CHANGES

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))
* qrcode extension ([#187](https://github.com/worldcoin/idkit-js/issues/187)) ([4617097](https://github.com/worldcoin/idkit-js/commit/4617097999727ab24a61d73a392b8c0441c7e74b))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))
* release 1.0.0-alpha.4 ([#188](https://github.com/worldcoin/idkit-js/issues/188)) ([f8f8073](https://github.com/worldcoin/idkit-js/commit/f8f8073768a8f15a92f09c61aeabd5ff10e48b92))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0-alpha.4

## [1.0.0-alpha.3](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.2...react-v1.0.0-alpha.3) (2023-12-01)


### ⚠ BREAKING CHANGES

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fix `@worldcoin/idkit/internal` import ([#184](https://github.com/worldcoin/idkit-js/issues/184)) ([d81a78a](https://github.com/worldcoin/idkit-js/commit/d81a78a484ba35e743f09aa47dc2d927e5c25b1f))
* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))
* release 1.0.0-alpha.3 ([#185](https://github.com/worldcoin/idkit-js/issues/185)) ([aaca138](https://github.com/worldcoin/idkit-js/commit/aaca1381c899f9f6bec9852c43d5156d3d8077e0))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0-alpha.3

## [1.0.0-alpha.2](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.1...react-v1.0.0-alpha.2) (2023-11-30)


### ⚠ BREAKING CHANGES

* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169))

### Features

* dep updates ([#181](https://github.com/worldcoin/idkit-js/issues/181)) ([9e65630](https://github.com/worldcoin/idkit-js/commit/9e65630362e6a7d6fea30539f36491181e68b35d))
* rename phone credential to device & misc improvements ([#169](https://github.com/worldcoin/idkit-js/issues/169)) ([d6ab268](https://github.com/worldcoin/idkit-js/commit/d6ab2682205a094b6af3cb8438eeefe67077118d))
* Separate into core/react/standalone, switch to bridge & more ([#156](https://github.com/worldcoin/idkit-js/issues/156)) ([7b1c5d6](https://github.com/worldcoin/idkit-js/commit/7b1c5d6690ccdb535340a6dcf7a9cb56f24cec1a))
* set package privacy & send `credential_types` by default ([#175](https://github.com/worldcoin/idkit-js/issues/175)) ([8a38ff3](https://github.com/worldcoin/idkit-js/commit/8a38ff35d3680bd0ae79da6b10d69dff0105d695))


### Bug Fixes

* fixes core and standalone packages; adds pre-publish script ([#176](https://github.com/worldcoin/idkit-js/issues/176)) ([9dd7a96](https://github.com/worldcoin/idkit-js/commit/9dd7a966d6294e5eead282a45726dd2091ea71ee))


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))
* release 1.0.0-alpha.1 ([#179](https://github.com/worldcoin/idkit-js/issues/179)) ([b7b6d44](https://github.com/worldcoin/idkit-js/commit/b7b6d443350399d946c6507ce69db6eb48d2c30c))
* release 1.0.0-alpha.2 ([#182](https://github.com/worldcoin/idkit-js/issues/182)) ([8bec821](https://github.com/worldcoin/idkit-js/commit/8bec8218623ac374d2eb54547caa0a782582509d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0-alpha.2

## [1.0.0-alpha.1](https://github.com/worldcoin/idkit-js/compare/react-v1.0.0-alpha.0...react-v1.0.0-alpha.1) (2023-11-27)


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


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @worldcoin/idkit-core bumped to 1.0.0-alpha.1

## [0.5.0](https://github.com/worldcoin/idkit-js/compare/idkit-v0.4.9...idkit-v0.5.0) (2023-06-08)


### Features

* Add docstrings ([#121](https://github.com/worldcoin/idkit-js/issues/121)) ([d5e2012](https://github.com/worldcoin/idkit-js/commit/d5e2012210071217bd9c4f704f9cb68fad025d7d))
* i18n ([#125](https://github.com/worldcoin/idkit-js/issues/125)) ([1101350](https://github.com/worldcoin/idkit-js/commit/1101350266f81491b476e2a0513e782388fd2cf4))
* update logos to new branding ([#124](https://github.com/worldcoin/idkit-js/issues/124)) ([0c36052](https://github.com/worldcoin/idkit-js/commit/0c360528675b3516a75407cc87f99e48cb7a0ac4))


### Bug Fixes

* move publish into release workflow ([#118](https://github.com/worldcoin/idkit-js/issues/118)) ([9c9b417](https://github.com/worldcoin/idkit-js/commit/9c9b4172baa97951544953123d70d80b8527b6eb))

## [0.4.9](https://github.com/worldcoin/idkit-js/compare/idkit-v0.4.8...idkit-v0.4.9) (2023-04-27)


### Features

* experimental mode selection ([#115](https://github.com/worldcoin/idkit-js/issues/115)) ([bff8c71](https://github.com/worldcoin/idkit-js/commit/bff8c71a471ca5eb1bc69f7e84af801c52fc2f0f))


### Bug Fixes

* Update SignInWithWorldID.tsx ([#110](https://github.com/worldcoin/idkit-js/issues/110)) ([ac9c69c](https://github.com/worldcoin/idkit-js/commit/ac9c69cfb062d61fca6a8d8887ff4b8a875619db)), closes [#109](https://github.com/worldcoin/idkit-js/issues/109)


### Miscellaneous Chores

* release 0.4.9 ([b94084e](https://github.com/worldcoin/idkit-js/commit/b94084e30653e2246c13d9bd30c2e5edd127bcde))

## [0.4.8](https://github.com/worldcoin/idkit-js/compare/idkit-v0.4.7...idkit-v0.4.8) (2023-04-15)

### Features

-   QR Code on Desktop (#107)

## [0.4.7](https://github.com/worldcoin/idkit-js/compare/idkit-v0.4.6...idkit-v0.4.7) (2023-04-15)

### Features

-   Bump deps & remove unused (#98).
-   Update README (#101).
-   Update QRCode (#105).
-   Basic tests (#104).

### Bug Fixes

-   Fix spinner size (#100).
-   Fix Developer Portal URL.

## [0.4.6](https://github.com/worldcoin/idkit-js/compare/v0.4.5...idkit-v0.4.6) (2023-03-14)

### Bug Fixes

-   QR code dark mode styles (#96).
-   Infinite loop credential types (#95).

## [0.4.5](https://github.com/worldcoin/idkit-js/compare/v0.4.4...v0.4.5) (2023-03-13)

### Features

-   UI Tweaks (#90).
-   Add CJS target (#93).

### Bug Fixes

-   qr logo positioning ([#79](https://github.com/worldcoin/idkit-js/issues/79)) ([45db408](https://github.com/worldcoin/idkit-js/commit/45db4087df0b630b9285ba9a4140d0e4662f1633))
-   remove a bunch of unused phone code ([#83](https://github.com/worldcoin/idkit-js/issues/83)) ([59f3ac0](https://github.com/worldcoin/idkit-js/commit/59f3ac053a86f02db0571c117c237910939fc1e2))
-   remove unused error codes ([#81](https://github.com/worldcoin/idkit-js/issues/81)) ([9a2b967](https://github.com/worldcoin/idkit-js/commit/9a2b967514d375dc80f51805ccfe6755314933cc))

## [0.4.4](https://github.com/worldcoin/idkit-js/compare/v0.4.0-alpha.2...v0.4.4) (2023-03-07)

### Features

-   phone credential type ([#87](https://github.com/worldcoin/idkit-js/issues/87)) ([9b42876](https://github.com/worldcoin/idkit-js/commit/9b428764a7873d040f5267ddac22b315a12435f9))
-   remove logo from qr ([#82](https://github.com/worldcoin/idkit-js/issues/82)) ([070b88e](https://github.com/worldcoin/idkit-js/commit/070b88e1702bc38329d6c408d9ac60ccbfb4357a))

### Bug Fixes

-   qr logo positioning ([#79](https://github.com/worldcoin/idkit-js/issues/79)) ([45db408](https://github.com/worldcoin/idkit-js/commit/45db4087df0b630b9285ba9a4140d0e4662f1633))
-   remove a bunch of unused phone code ([#83](https://github.com/worldcoin/idkit-js/issues/83)) ([59f3ac0](https://github.com/worldcoin/idkit-js/commit/59f3ac053a86f02db0571c117c237910939fc1e2))
-   remove unused error codes ([#81](https://github.com/worldcoin/idkit-js/issues/81)) ([9a2b967](https://github.com/worldcoin/idkit-js/commit/9a2b967514d375dc80f51805ccfe6755314933cc))

### [0.4.3](https://github.com/worldcoin/idkit-js/compare/v0.4.2...v0.4.3) (2023-02-27)

### [0.4.2](https://github.com/worldcoin/idkit-js/compare/v0.4.1...v0.4.2) (2023-02-26)

### Bug Fixes

-   types ([#75](https://github.com/worldcoin/idkit-js/issues/75)) ([a2503da](https://github.com/worldcoin/idkit-js/commit/a2503da3dac513226cad2f74811b532b76a7301d))

### [0.4.1](https://github.com/worldcoin/idkit-js/compare/v0.4.0...v0.4.1) (2023-02-25)

### Bug Fixes

-   @stitches/react should be a dep ([#73](https://github.com/worldcoin/idkit-js/issues/73)) ([b9cf3cc](https://github.com/worldcoin/idkit-js/commit/b9cf3cc7e68a6965c2739a6cbb7df7dac253f73a))

## [0.4.0](https://github.com/worldcoin/idkit-js/compare/v0.4.0-alpha.2...v0.4.0) (2023-02-25)

### ⚠ BREAKING CHANGES

-   migrate to WalletConnect v2 (#53)

### Features

-   Sign in with World ID Button

### Bug Fixes

-   Allow empty signals and actions.

## [0.4.0-alpha.2](https://github.com/worldcoin/idkit-js/compare/v0.4.0-alpha.1...v0.4.0-alpha.2) (2023-02-22)

### Bug Fixes

-   success callback ([#65](https://github.com/worldcoin/idkit-js/issues/65)) ([552de7e](https://github.com/worldcoin/idkit-js/commit/552de7e9fff1c250d0c3efd1e419ec8aa75aeec7))

## [0.4.0-alpha.1](https://github.com/worldcoin/idkit-js/compare/v0.4.0-alpha.0...v0.4.0-alpha.1) (2023-02-22)

### Bug Fixes

-   move internal functions to main ([#63](https://github.com/worldcoin/idkit-js/issues/63)) ([9feec7c](https://github.com/worldcoin/idkit-js/commit/9feec7c961700fb54124ede6005c1301209bf278))

## [0.4.0-alpha.0](https://github.com/worldcoin/idkit-js/compare/v0.3.3...v0.4.0-alpha.0) (2023-02-22)

### ⚠ BREAKING CHANGES

-   Migrate to app_id architecture, remove external phone support & more (#61)

### Features

-   Migrate to app_id architecture, remove external phone support & more ([#61](https://github.com/worldcoin/idkit-js/issues/61)) ([89c7111](https://github.com/worldcoin/idkit-js/commit/89c71110d2fc9c59918b9d5b4fa382b6ee5fe662))

### [0.3.3](https://github.com/worldcoin/idkit-js/compare/v0.3.2...v0.3.3) (2023-02-21)

Correct build for changes in 0.3.2.

### [0.3.2](https://github.com/worldcoin/idkit-js/compare/v0.3.1...v0.3.2) (2023-02-20)

⚠ Deprecated. Use 0.3.3 instead.

### Features

-   export main hashing functions ([#58](https://github.com/worldcoin/idkit-js/issues/58)) ([298eeef](https://github.com/worldcoin/idkit-js/commit/298eeef975c4ababb4a58a9e6852efd3bf4826d9))

### [0.3.1](https://github.com/worldcoin/idkit-js/compare/v0.3.0...v0.3.1) (2023-02-15)

### Bug Fixes

-   make hook complimentary to component ([#56](https://github.com/worldcoin/idkit-js/issues/56)) ([0b69dbd](https://github.com/worldcoin/idkit-js/commit/0b69dbdc85b7c1317f6b71abb1d6b0c0bcc8c859))

## [0.3.0](https://github.com/worldcoin/idkit-js/compare/v0.2.6...v0.3.0) (2023-02-14)

### ⚠ BREAKING CHANGES

-   migrate to WalletConnect v2 (#53)

### Features

-   migrate to WalletConnect v2 ([#53](https://github.com/worldcoin/idkit-js/issues/53)) ([40664f7](https://github.com/worldcoin/idkit-js/commit/40664f7fb5373463f8af6d41a905da9359047071))

### Bug Fixes

-   Design and WC bugs ([#51](https://github.com/worldcoin/idkit-js/issues/51)) ([de74902](https://github.com/worldcoin/idkit-js/commit/de74902bf868680970ee1394394d16254762f4f3))

### [0.2.7](https://github.com/worldcoin/idkit-js/compare/v0.2.6...v0.2.7) (2023-02-04)

### Bug Fixes

-   Design and WC bugs ([#51](https://github.com/worldcoin/idkit-js/issues/51)) ([de74902](https://github.com/worldcoin/idkit-js/commit/de74902bf868680970ee1394394d16254762f4f3))

### [0.2.6](https://github.com/worldcoin/idkit-js/compare/v0.2.3...v0.2.6) (2023-02-01)

### Features

-   bundle size analyzer and reduce ([#46](https://github.com/worldcoin/idkit-js/issues/46)) ([c7fe058](https://github.com/worldcoin/idkit-js/commit/c7fe058f2dba0242a0027a915049c84b16b0999a))
-   credential selections support & new UI ([#48](https://github.com/worldcoin/idkit-js/issues/48)) ([13c7dcd](https://github.com/worldcoin/idkit-js/commit/13c7dcdd998a4d9d843fed961e5ea38ab0fede27))
-   misc changes ([#43](https://github.com/worldcoin/idkit-js/issues/43)) ([aec2763](https://github.com/worldcoin/idkit-js/commit/aec2763b346251e73c7e1c3e7dd92870830c76cf))

### Bug Fixes

-   zustand import ([#47](https://github.com/worldcoin/idkit-js/issues/47)) ([8d8f829](https://github.com/worldcoin/idkit-js/commit/8d8f8291271be86ea8e23948eebe767684a637f8))

### [0.2.5](https://github.com/worldcoin/idkit-js/compare/v0.2.4...v0.2.3) (2023-01-21)

### Features

-   misc changes ([#43](https://github.com/worldcoin/idkit-js/issues/43)) ([aec2763](https://github.com/worldcoin/idkit-js/commit/aec2763b346251e73c7e1c3e7dd92870830c76cf))

### 0.2.4 (2023-01-18)

### Bug Fixes

-   reset state when auto-closing modal ([fea9d8f](https://github.com/worldcoin/idkit-js/commit/fea9d8fae86e8959bce928e1fa22ce828f86847f))
-   call success callbacks after modal closes ([356489a](https://github.com/worldcoin/idkit-js/commit/356489a10797429ea42f3b989c1b29db0b9d3ae5))

### 0.2.3 (2023-01-18)

### Bug Fixes

-   fix app verification logic on `IDKitWidget` component ([88dd70c](https://github.com/worldcoin/idkit-js/commit/88dd70c265c41c1036d37f232569494660ce749e))

### 0.2.2 (2023-01-18)

### Bug Fixes

-   fix infinite loop when using `useIDKit` hook ([039448f](https://github.com/worldcoin/idkit-js/commit/039448f09d63f3059af42181bc213e62ee378127))

### 0.2.1 (2023-01-18)

### Bug Fixes

-   ensure package uses new posthog-js-lite version ([d03ec5d](https://github.com/worldcoin/idkit-js/commit/d03ec5debfcb14b3e635f2f62ded1e6899c595c6))
-   update examples to new version ([62f6c48](https://github.com/worldcoin/idkit-js/commit/62f6c486f0a1df5ea0b032ae8bb729dc1f0b551f))

## 0.2.0 (2023-01-18)

### ⚠ BREAKING CHANGES

-   custom validation logic, call for code, fixes (#31)

### Features

-   add error states ([#11](https://github.com/worldcoin/idkit-js/issues/11)) ([0ee685d](https://github.com/worldcoin/idkit-js/commit/0ee685dd0ab3deb24acda9f4aa218e3dd12835c6))
-   add MIT license ([#35](https://github.com/worldcoin/idkit-js/issues/35)) ([7c3ae3d](https://github.com/worldcoin/idkit-js/commit/7c3ae3d74c243ca2b6f70bef1c06afb1ee122c2b))
-   add opt-in telemetry ([#24](https://github.com/worldcoin/idkit-js/issues/24)) ([081a5ef](https://github.com/worldcoin/idkit-js/commit/081a5efa4aca83b1d331d4ad663d831b308173c4))
-   basic error states ([#9](https://github.com/worldcoin/idkit-js/issues/9)) ([eca0d22](https://github.com/worldcoin/idkit-js/commit/eca0d220fdff865784f5faabfda08a6f7b39ed91))
-   connect IDKit JS with SMS API ([#6](https://github.com/worldcoin/idkit-js/issues/6)) ([d1167f2](https://github.com/worldcoin/idkit-js/commit/d1167f2ba789e41669cd7098713fc87c909a5a75))
-   custom validation logic, call for code, fixes ([#31](https://github.com/worldcoin/idkit-js/issues/31)) ([d6f1b56](https://github.com/worldcoin/idkit-js/commit/d6f1b56e822f7de68255f84f074d18930f0d49b5))
-   Improvements to IDKit JS v0 ([#16](https://github.com/worldcoin/idkit-js/issues/16)) ([2a4d989](https://github.com/worldcoin/idkit-js/commit/2a4d9894c0874156214c4e576b1ac3ef4d58fa0b))
-   Lens readme ([#18](https://github.com/worldcoin/idkit-js/issues/18)) ([fcb6c9c](https://github.com/worldcoin/idkit-js/commit/fcb6c9c8a8d3eda8f7d0a48821eba9147e938783))
-   minor refactors & v0.0.1 publish ([#20](https://github.com/worldcoin/idkit-js/issues/20)) ([cb6a59e](https://github.com/worldcoin/idkit-js/commit/cb6a59eacbafbdc975956478c9c482f1eda43125))
-   Orb signal support ([#22](https://github.com/worldcoin/idkit-js/issues/22)) ([4e13ce3](https://github.com/worldcoin/idkit-js/commit/4e13ce307216bf5ab8cd17a207f3306ce0cdbc4c))
-   Privacy Policy ([#28](https://github.com/worldcoin/idkit-js/issues/28)) ([fa8d78d](https://github.com/worldcoin/idkit-js/commit/fa8d78de147d1ed4bb7d896839413f080fe92846))
-   Replaced generic error toast with custom error stages ([#32](https://github.com/worldcoin/idkit-js/issues/32)) ([35ca61b](https://github.com/worldcoin/idkit-js/commit/35ca61b992f347efe07dca83ed030fe1d22275c8))
-   show toast with animation ([#13](https://github.com/worldcoin/idkit-js/issues/13)) ([f2963d4](https://github.com/worldcoin/idkit-js/commit/f2963d4e9437a6bb33ef8c01f1c786537d72ce23))

### Bug Fixes

-   add cssstylesheet polyfill ([#10](https://github.com/worldcoin/idkit-js/issues/10)) ([64e6540](https://github.com/worldcoin/idkit-js/commit/64e6540fdb2c2725247f93a8c5c3d9f20dd2ce5b))
-   country selector ([#12](https://github.com/worldcoin/idkit-js/issues/12)) ([75cb168](https://github.com/worldcoin/idkit-js/commit/75cb1685906a52169d9e51dcc7467ce56ca0054f))
-   mobile styles ([#14](https://github.com/worldcoin/idkit-js/issues/14)) ([b27d241](https://github.com/worldcoin/idkit-js/commit/b27d2413b161744911cab071bfb323699a0dbe79))

## 0.1.0 (2023-01-04)

### ⚠ BREAKING CHANGES

-   custom validation logic, call for code, fixes (#31)

### Features

-   custom validation logic, call for code, fixes ([#31](https://github.com/worldcoin/idkit-js/issues/31)) ([d6f1b56](https://github.com/worldcoin/idkit-js/commit/d6f1b56e822f7de68255f84f074d18930f0d49b5))
-   Improvements to IDKit JS v0 ([#16](https://github.com/worldcoin/idkit-js/issues/16)) ([2a4d989](https://github.com/worldcoin/idkit-js/commit/2a4d9894c0874156214c4e576b1ac3ef4d58fa0b))
-   Lens readme ([#18](https://github.com/worldcoin/idkit-js/issues/18)) ([fcb6c9c](https://github.com/worldcoin/idkit-js/commit/fcb6c9c8a8d3eda8f7d0a48821eba9147e938783))
-   minor refactors & v0.0.1 publish ([#20](https://github.com/worldcoin/idkit-js/issues/20)) ([cb6a59e](https://github.com/worldcoin/idkit-js/commit/cb6a59eacbafbdc975956478c9c482f1eda43125))
-   Privacy Policy ([#28](https://github.com/worldcoin/idkit-js/issues/28)) ([fa8d78d](https://github.com/worldcoin/idkit-js/commit/fa8d78de147d1ed4bb7d896839413f080fe92846))
-   Replaced generic error toast with custom error stages ([#32](https://github.com/worldcoin/idkit-js/issues/32)) ([35ca61b](https://github.com/worldcoin/idkit-js/commit/35ca61b992f347efe07dca83ed030fe1d22275c8))

### 0.0.2 (2023-01-03)

### Features

-   add error states ([#11](https://github.com/worldcoin/idkit-js/issues/11)) ([0ee685d](https://github.com/worldcoin/idkit-js/commit/0ee685dd0ab3deb24acda9f4aa218e3dd12835c6))
-   add opt-in telemetry ([#24](https://github.com/worldcoin/idkit-js/issues/24)) ([081a5ef](https://github.com/worldcoin/idkit-js/commit/081a5efa4aca83b1d331d4ad663d831b308173c4))
-   basic error states ([#9](https://github.com/worldcoin/idkit-js/issues/9)) ([eca0d22](https://github.com/worldcoin/idkit-js/commit/eca0d220fdff865784f5faabfda08a6f7b39ed91))
-   connect IDKit JS with SMS API ([#6](https://github.com/worldcoin/idkit-js/issues/6)) ([d1167f2](https://github.com/worldcoin/idkit-js/commit/d1167f2ba789e41669cd7098713fc87c909a5a75))
-   Improvements to IDKit JS v0 ([#16](https://github.com/worldcoin/idkit-js/issues/16)) ([2a4d989](https://github.com/worldcoin/idkit-js/commit/2a4d9894c0874156214c4e576b1ac3ef4d58fa0b))
-   minor refactors & v0.0.1 publish ([#20](https://github.com/worldcoin/idkit-js/issues/20)) ([cb6a59e](https://github.com/worldcoin/idkit-js/commit/cb6a59eacbafbdc975956478c9c482f1eda43125))
-   Orb signal support ([#22](https://github.com/worldcoin/idkit-js/issues/22)) ([4e13ce3](https://github.com/worldcoin/idkit-js/commit/4e13ce307216bf5ab8cd17a207f3306ce0cdbc4c))
-   show toast with animation ([#13](https://github.com/worldcoin/idkit-js/issues/13)) ([f2963d4](https://github.com/worldcoin/idkit-js/commit/f2963d4e9437a6bb33ef8c01f1c786537d72ce23))

### Bug Fixes

-   add cssstylesheet polyfill ([#10](https://github.com/worldcoin/idkit-js/issues/10)) ([64e6540](https://github.com/worldcoin/idkit-js/commit/64e6540fdb2c2725247f93a8c5c3d9f20dd2ce5b))
-   country selector ([#12](https://github.com/worldcoin/idkit-js/issues/12)) ([75cb168](https://github.com/worldcoin/idkit-js/commit/75cb1685906a52169d9e51dcc7467ce56ca0054f))
-   mobile styles ([#14](https://github.com/worldcoin/idkit-js/issues/14)) ([b27d241](https://github.com/worldcoin/idkit-js/commit/b27d2413b161744911cab071bfb323699a0dbe79))
