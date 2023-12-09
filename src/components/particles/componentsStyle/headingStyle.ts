const headingStyle = {
  variants: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        fira: {
          fontFamily: "body",
          fontWeight: "semibold",
          lineHeight: 13,
        },
        chalk: {
          fontFamily: "Kalam",
        },
        black: {
          fontWeight: "black",
        },
      },
    },
  },
};

export default headingStyle;
