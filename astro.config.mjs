import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

export default defineConfig({
  site: "https://bemxself.github.io",
  base: "/everything-harness-engineering",
  output: "static",
  integrations: [
    starlight({
      title: "Everything Harness Engineering",
      description:
        "A public overview of harness engineering, harness-like agent shells, and adjacent workflow suites.",
      titleDelimiter: "·",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/BeMxself/everything-harness-engineering",
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/BeMxself/everything-harness-engineering/edit/main/",
      },
      sidebar: [
        {
          label: "Overview",
          link: "/",
        },
        {
          label: "研究总览",
          items: [
            "definition",
            "distinction",
            "timeline",
            "community",
            "landscape",
            "topics",
          ],
        },
        {
          label: "Repository",
          items: [
            {
              label: "GitHub Repo",
              link: "https://github.com/BeMxself/everything-harness-engineering",
            },
            {
              label: "framework-flow-diagrams",
              link: "/topics/framework-flow-diagrams/site/",
            },
          ],
        },
      ],
      plugins: [starlightThemeFlexoki({ accentColor: "blue" })],
    }),
  ],
});
