# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.14](https://github.com/worldcoin/idkit-js/compare/v0.2.13...v0.2.14) (2023-02-06)

### [0.2.13](https://github.com/worldcoin/idkit-js/compare/v0.2.12...v0.2.13) (2023-02-06)

### [0.2.12](https://github.com/worldcoin/idkit-js/compare/v0.2.11...v0.2.12) (2023-02-06)

### [0.2.11](https://github.com/worldcoin/idkit-js/compare/v0.2.10...v0.2.11) (2023-02-06)

### [0.2.10](https://github.com/worldcoin/idkit-js/compare/v0.2.9...v0.2.10) (2023-02-06)

### [0.2.9](https://github.com/worldcoin/idkit-js/compare/v0.2.8...v0.2.9) (2023-02-06)

### [0.2.8](https://github.com/worldcoin/idkit-js/compare/v0.2.6...v0.2.8) (2023-02-06)


### Bug Fixes

* Design and WC bugs ([#51](https://github.com/worldcoin/idkit-js/issues/51)) ([de74902](https://github.com/worldcoin/idkit-js/commit/de74902bf868680970ee1394394d16254762f4f3))

### [0.2.7](https://github.com/worldcoin/idkit-js/compare/v0.2.6...v0.2.7) (2023-02-06)


### Bug Fixes

* Design and WC bugs ([#51](https://github.com/worldcoin/idkit-js/issues/51)) ([de74902](https://github.com/worldcoin/idkit-js/commit/de74902bf868680970ee1394394d16254762f4f3))

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
