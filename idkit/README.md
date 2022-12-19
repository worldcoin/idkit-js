# IDKit JS Widget

This folder (`/idkit`) contains the main code for the widget. For instructions on **how to use the widget**, please refer to the repository's main [README](/README.md).

## ℹ️ About the Codebase

-   The widget is made to work mainly with vanilla JS code (no framework required). The starting point can be found in `src/vanilla.tsx`.
-   The React wrapper is found on `src/components/IDKitWidget/index.ts`.

## 🧑‍💻 Development & Testing

To develop locally and contribute to this package, you can simply follow these instructions after cloning the repo.

-   Install dependencies
    ```bash
    # be sure to run this in the root folder of the repo
    yarn install
    ```
-   Run tests
    ```bash
    # runs in the /idkit folder
    cd idkit/
    yarn test
    ```
-   Run local test project
    ```bash
    # runs in the /idkit folder
    yarn dev
    ```
-   Open browser at `http://localhost:3000`
-   To build the production bundle you can simply run.
    ```bash
    # runs in the /idkit folder
    yarn build
    ```
