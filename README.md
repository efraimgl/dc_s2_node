# 📦 Node.js CI Pipeline with GitHub Actions

This project includes a simple **GitHub Actions** workflow for running automated tests whenever code is pushed to the repository.

---

## 🔧 CI Workflow Overview

The CI workflow is defined in `.github/workflows/ci.yml` and is triggered on code pushes.

### 🛠 Workflow Name

`CI Pipeline`

### 🚀 Trigger

* Runs on every `push` to any branch

---

## ✅ What the Pipeline Does

1. **Check out the repository**
   Uses `actions/checkout@v3` to pull the latest code.

2. **Set up Node.js**
   Uses `actions/setup-node@v3` to install Node.js version `18`.

3. **Install dependencies**
   Runs `npm install` to install project packages.

4. **Run tests**
   Executes `npm test`, typically running a Jest test suite.

---

## 📁 Sample Workflow Configuration

```yaml
name: CI Pipeline

on: [push]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

---

## 💡 Project Requirements

* A valid `package.json` file must be present.
* A `test` script must be defined, for example:

  ```json
  "scripts": {
    "test": "jest"
  }
  ```
