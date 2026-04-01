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
      components: {
        Head: "./src/components/StarlightHead.astro",
      },
      customCss: ["./src/styles/starlight-overrides.css"],
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
      disable404Route: true,
      sidebar: [
        {
          label: "Overview",
          link: "/",
        },
        {
          label: "研究总览",
          items: [
            { label: "概念入口", link: "/concept-entry/" },
            { label: "术语与证据边界", link: "/terminology-and-evidence/" },
            { label: "文章证据工作法", link: "/article-evidence-method/" },
            { label: "关键文章", link: "/key-articles/" },
            { label: "生态与比较", link: "/ecosystem-comparison/" },
            {
              label: "研究专题",
              items: [
                { label: "专题总览", link: "/topics/" },
                {
                  label: "深入剖析 OMO 与 OMX",
                  link: "/topics/omo-and-omx/",
                },
              ],
            },
            { label: "社区讨论", link: "/community-discussions/" },
            { label: "工程观察", link: "/engineering-observations/" },
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
              label: "host-harness-flow-diagrams",
              link: "/topics/host-harness-flow-diagrams/site/",
            },
          ],
        },
      ],
      plugins: [starlightThemeFlexoki({ accentColor: "blue" })],
    }),
  ],
});
