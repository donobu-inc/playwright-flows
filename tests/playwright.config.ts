import { defineConfig } from "donobu";

export default defineConfig({
  projects: [
    {
      name: "login",
      testMatch: "**/auth/login.spec.ts",
    },
    {
      name: "logged-in-tests",
      use: {
        storageState: "login.json",
      },
      dependencies: ["login"],
      testMatch: "**/logged-in/*.spec.ts",
    },
  ],
  // Global settings for all projects
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [
    ["github"],
    ["json", { outputFile: "test-results/playwright-report.json" }],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
});
