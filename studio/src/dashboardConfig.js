export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6075b41153fad8f60532599b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-w6msq7vr",
                  apiId: "54291bdf-4d77-4f6b-93f7-ecdcc94c4267",
                },
                {
                  buildHookId: "6075b4119860bfdbbff482c8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hvsfgn6t",
                  apiId: "4e1f5d0d-62fe-453d-adda-2ed1af3aefda",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/thainabbraz/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hvsfgn6t.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
