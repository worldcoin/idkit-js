# IDKit HTML Examples

This directory contains working examples of both IDKit integration patterns for vanilla HTML/JavaScript applications.

## Examples

> ⚠️ These examples showcase how to retrieve user's ZK-proof, in a production environment you need to verify the proof in your backend system. For more details check out our [docs](https://docs.world.org)

### 📄 `index.html` - IDKit Widget

Example showcasing IDKit Widget modal for World ID verification

**Route:** `http://localhost:5173/index.html`

---

### 📄 `session-example.html` - Session API

Example showcasing IDKit Session API that allows for more control over state / UI management modal

**Route:** `http://localhost:5173/session-example.html`

## Running the Examples

### Prerequisites

```bash
pnpm run build # build all workspaces packages at root
```

```bash
pnpm install
```

### Development Server

```bash
pnpm run dev
```

Then visit:

-   **Widget Example**: http://localhost:5173/index.html
-   **Session Example**: http://localhost:5173/session-example.html
