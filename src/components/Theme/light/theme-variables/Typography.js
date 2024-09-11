export const Typography =  Object.freeze({
    fontFamily: ["Lato"].join(","),
    at: {
      fontSize: 18,
      color: "#000",
      fontStyle: "bold",
    },
    h1: {
      fontWeight: 800,
      lineHeight: "80px",
      fontSize: "64px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "50px",
        fontSize: "40px",
      }
    },
    h2: {
      fontWeight: 800,
      lineHeight: "64px",
      fontSize: "48px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "42.7px",
        fontSize: "24px",
      }
    },
    h3: {
      fontWeight: 700,
      lineHeight: "48px",
      fontSize: "32px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "24px",
        fontSize: "22px",
      }
    },
    h4: {
      fontWeight: 700,
      lineHeight: "36px",
      fontSize: "24px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "30px",
        fontSize: "20px",
      }
    },
    h5: {
      fontWeight: 700,
      lineHeight: "30px",
      fontSize: "20px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "27px",
        fontSize: "18px",
      }
    },
    h6: {
      fontWeight: 700,
      lineHeight: "28px",
      fontSize: "18px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "26.4px",
        fontSize: "16px",
      }
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: "24px",
      fontSize: "16px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "22px",
        fontSize: "15px",
      }
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: "22px",
      fontSize: "14px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "20px",
        fontSize: "13px",
      }
    },
    body1: {
      lineHeight: "24px",
      fontSize: "16px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "22px",
        fontSize: "14px",
      }
    },
    body2: {
      lineHeight: "22px",
      fontSize: "14px",
      "@media only screen and (max-width: 700px)": {
        lineHeight: "20px",
        fontSize: "12px",
      }
    },
  
    small: {
      fontSize: "10px",
      fontWeight: 600,
      lineHeight: "0",
      textAlign: "center",
      "@media only screen and (max-width: 700px)": { 
        fontSize: "8px",
      }
    },
    caption: {
      fontWeight: 400,
      lineHeight: "24px",
      fontSize: "12px",
      "@media only screen and (max-width: 700px)": { 
        fontSize: "14px",
      }
    },
    overline: {
      fontWeight: 400,
      lineHeight: "24px",
      fontSize: "16px",
      textTransform: "uppercase",
      "@media only screen and (max-width: 700px)": { 
        fontSize: "14px",
      }
    },
    buttonLarge: {
      fontWeight: 700,
      lineHeight: "26px",
      fontSize: "15px",
      textTransform: "uppercase",
      "@media only screen and (max-width: 700px)": { 
        fontSize: "13px",
      }
    },
    buttonMedium: {
      fontWeight: 700,
      lineHeight: "24px",
      fontSize: "14px",
      textTransform: "uppercase",
      "@media only screen and (max-width: 700px)": { 
        fontSize: "12px",
      }
    },
    buttonSmall: {
      fontWeight: 700,
      lineHeight: "22px",
      fontSize: "13px",
      textTransform: "uppercase",
      "@media only screen and (max-width: 700px)": { 
        fontSize: "11px",
      }
    },
    
})