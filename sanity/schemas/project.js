export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "smallScreen",
      title: "Small Screen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "mediumScreen",
      title: "Medium Screen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "largeScreen",
      title: "Large Screen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
