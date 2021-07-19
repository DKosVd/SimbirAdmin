const customStyles = {
  dropdownIndicator: (styles: any) => {
    return {
      ...styles,
      display: "none",
    };
  },
  option: (styles: any, { isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: "white",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "16px",
      color: "var(--main-black)",
      ":hover": {
        color: "var(--color-blue)",
        backgroundColor: "none",
        cursor: "pointer",
      },
      ":active": {
        backgroundColor: "none",
      },
    };
  },
  control: (styles: any) => {
    return {
      ...styles,
      minHeight: "29px",
      maxHeight: "29px",
      minWidth: "110px",
      ":before": {
        content: "''",
        position: "absolute",
        width: 0,
        right: 8,
        bottom: 8,
        height: 0,
        border: "none",
        borderTop: "4px solid #000000",
        borderLeft: "4px solid rgba(0,0,0,0)",
        borderRight: "4px solid rgba(0,0,0,0)",
      },
      ":after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        top: 8,
        right: 8,
        border: "none",
        borderBottom: "4px solid #000000",
        borderLeft: "4px solid rgba(0,0,0,0)",
        borderRight: "4px solid rgba(0,0,0,0)",
      },
    };
  },
  valueContainer: (styles: any) => {
    return {
      ...styles,
      maxHeight: "16px",
      padding: "4px 8px",
      position: "none",
    };
  },
  placeholder: (styles: any, state: any) => {
    return {
      ...styles,
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "14px",
      lineHeight: "16px",
      top: state.hasValue ? "-50%" : "50%",
    };
  },
  //   singleValue: (styles: any) => {
  //     return {
  //       ...styles,
  //       fontFamily: "Roboto",
  //       fontStyle: "normal",
  //       fontWeight: "300",
  //       overflow: "auto",
  //       fontSize: "14px",
  //       lineHeight: "16px",
  //       padding: "4px 0px",
  //       color: "var(--main-black)",
  //       top: "45%",
  //     };
  //   },
  menu: (styles: any) => {
    return {
      ...styles,
      borderRadius: "0px",
      // maxHeight: "100px",
      // overflowY: "scroll",
      zIndex: "9999",
    };
  },
  indicatorsContainer: (styles: any) => {
    return {
      ...styles,
      //   position: "absolute",
      //   right: "22px",
      //   top: 0,
      //   maxWidth: "12px",
      maxHeight: "12px",
      //   padding: "0",
      ":hover": {
        cursor: "pointer",
      },
    };
  },
};

export default customStyles;
