const link = {
  variants: {
    button: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    classic: {
      fontSize: 'sm',
      color: 'blue',
      fontWeight: '400',
    },
    appNav: {
      textAlign: 'center',
      fontSize: '11.662px',
      padding: '10px 5px',
      marginStart: 0,
      transition: '.5s',
      gridRow: '1/2',
      color: 'mono.500',
    },
  },
};

export default link;
