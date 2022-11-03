export const config = {
  component: "li",
  id: "cardWrapper",
  children: [
    {
      component: "div",
      id: "initialWrapper",
      className: "classDiv",
      // styles: [
      //   {
      //     name: "backroundColor",
      //     values: "lightblue",
      //   },
      // ],
      children: "HB",
    },
    {
      component: "div",
      id: "infoWrapper",
      className: "classDiv",
      children: [
        {
          component: "div",
          id: "info",
          className: "classDiv",
          children: "HB",
        },
      ],
    },
  ],
};
