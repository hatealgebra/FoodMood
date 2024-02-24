const List = {
  parts: ['container', 'item'],
  baseStyle: {
    container: {
      paddingInlineStart: '15px',
      textAlign: 'left',
      paddingY: '10px',
    },
    item: {
      marginY: '10px',
    },
  },
  variants: {
    noPadding: {
      container: {
        margin: 0,
        paddingInlineStart: 0,
      },
    },
    nav: {
      container: {
        alignItems: 'flex-start',
        pl: 0,
      },
      item: {
        textTransform: 'capitalize',
        fontSize: 'md',
      },
    },
  },
};

export default List;
