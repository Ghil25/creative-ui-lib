
export const componentsOverrides =  Object.freeze({
    MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            fontWeight: "700",
            // "&.Mui-disabled.MuiButton-contained": {
            //   backgroundColor: "#DFE3E8",
            //   color: "#F4F6F8",
            // },
            // "&.MuiButton-contained": {
            //   color: "#F9FAFB",
            // },
            // "&.MuiButton-sizeSmall": {
            //   width: "auto",
            //   height: "30px",
            // },
            // "&.MuiButton-sizeMedium": {
            //   width: "auto",
            //   height: "36px",
            // },
            // "&.MuiButton-sizeLarge": {
            //   width: "auto",
            //   height: "42px",
            // },
          },
        },
      },
    // MuiChip : {
    //   styleOverrides: {
    //     root: ({theme})=>({
    //       backgroundColor: theme.palette.primary[100],
    //       color: theme.palette.primary,
    //       "&:hover": {
    //         backgroundColor: "purple"
    //       }
    //     })
    //   }
    // }
    MuiChip: {
      styleOverrides: {
        root: {

  
          borderRadius: "8px",
          
          "&.MuiChip-filled.MuiChip-colorPrimary": {
            backgroundColor: "#FFE6D9",
            color: "#DB3241",
            "&:hover": {
              backgroundColor: "#FF4545",
              color: 'white'
            }
          },
          "&.MuiChip-filled.MuiChip-colorSecondary": {
            backgroundColor: "#E2F0FC",
            color: "#486BAF",
            "&:hover": {
              backgroundColor: "#FF4545",
               color: 'white'
            }
          },
          "&.MuiChip-filled.MuiChip-colorDisabled": {
            backgroundColor: "#F4F6F8",
            color: "#C4CDD5",
            "&:hover": {
              backgroundColor: "#FF4545",
               color: 'white'
            }
          },
          "&.MuiChip-filled.MuiChip-colorSuccess": {
            backgroundColor: "#EFFDD6",
            color: "#59C227",
            "&:hover": {
              backgroundColor: "#FF4545",
               color: 'white'
            }
          },
          "&.MuiChip-filled.MuiChip-colorWarning": {
            backgroundColor: "#FFF6D8",
            color: "#DB942E",
            "&:hover": {
              backgroundColor: "#FF4545",
               color: 'white'
            }
          },
          "&.MuiChip-filled.MuiChip-colorInfo": {
            backgroundColor: "#CBFEFA",
            color: "#0090CB",
            "&:hover": {
              backgroundColor: "#FF4545",
               color: 'white'
            }
          },
          "&.MuiChip-filled.MuiChip-colorError": {
            backgroundColor: "#FEE8E2",
            color: "#D64F70",
            "&:hover": {
              backgroundColor: "#FF4545",
               color: 'white'
            }
          },
          // outlined variants colors
          "&.MuiChip-outlined.MuiChip-colorPrimary": {
            borderColor: "#DB3241",
            color: "#DB3241",
            "&:hover": {
              backgroundColor: "#FFE6D9",
              
            }
          },
          "&.MuiChip-outlined.MuiChip-colorSecondary": {
            borderColor: "#486BAF",
            color: "#486BAF",
            "&:hover": {
              backgroundColor: "#FFE6D9",
 
    
            }
          },
          "&.MuiChip-outlined.MuiChip-colorDisabled": {
            borderColor: "#C4CDD5",
            color: "#C4CDD5",
            "&:hover": {
              backgroundColor: "#FFE6D9",
              
            }
          },
          "&.MuiChip-outlined.MuiChip-colorSuccess": {
            borderColor: "#59C227",
            color: "#59C227",
            "&:hover": {
              backgroundColor: "#FFE6D9",
             
            }
          },
          "&.MuiChip-outlined.MuiChip-colorWarning": {
            borderColor: "#DB942E",
            color: "#DB942E",
            "&:hover": {
              backgroundColor: "#FFE6D9",
            
            }
          },
          "&.MuiChip-outlined.MuiChip-colorInfo": {
            borderColor: "#0090CB",
            color: "#0090CB",
            "&:hover": {
              backgroundColor: "#FFE6D9",
          
            }
          },
          "&.MuiChip-outlined.MuiChip-colorError": {
            borderColor: "#D64F70",
            color: "#D64F70",
            "&:hover": {
              backgroundColor: "#FFE6D9",
     
            }
          },
        },
      },
    },
})