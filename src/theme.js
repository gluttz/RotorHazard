export default function getDesignTokens(mode) {
    return mode === "light"
        ? {
              palette: {
                  mode: "light",
                  primary: {
                      main: "#64b5f6",
                  },
                  secondary: {
                      main: "#d2ac10",
                  },
              },

              spacing: 8,
              shape: {
                  borderRadius: 0,
              },
              components: {
                  MuiAppBar: {
                      styleOverrides: {
                          colorInherit: {
                              backgroundColor: "transparent",
                              color: "#fff",
                          },
                      },
                  },
                  MuiSwitch: {
                      styleOverrides: {
                          root: {
                              width: 42,
                              height: 26,
                              padding: 0,
                              margin: 8,
                          },
                          switchBase: {
                              padding: 1,
                              "&$checked, &$colorPrimary$checked, &$colorSecondary$checked":
                                  {
                                      transform: "translateX(16px)",
                                      color: "#fff",
                                      "& + $track": {
                                          opacity: 1,
                                          border: "none",
                                      },
                                  },
                          },
                          thumb: {
                              width: 24,
                              height: 24,
                          },
                          track: {
                              borderRadius: 13,
                              border: "1px solid #bdbdbd",
                              backgroundColor: "#fafafa",
                              opacity: 1,
                              transition:
                                  "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                          },
                      },
                  },
              },
              props: {
                  MuiAppBar: {
                      color: "inherit",
                  },
                  MuiTooltip: {
                      arrow: true,
                  },
              },
          }
        : {
              palette: {
                  mode: "dark",
                  primary: {
                      main: "#64b5f6",
                  },
                  secondary: {
                      main: "#d2ac10",
                  },
              },

              spacing: 8,
              shape: {
                  borderRadius: 0,
              },
              components: {
                  MuiAppBar: {
                      styleOverrides: {
                          colorInherit: {
                              backgroundColor: "transparent",
                              color: "#fff",
                          },
                      },
                  },
                  MuiSwitch: {
                      styleOverrides: {
                          root: {
                              width: 42,
                              height: 26,
                              padding: 0,
                              margin: 8,
                          },
                          switchBase: {
                              padding: 1,
                              "&$checked, &$colorPrimary$checked, &$colorSecondary$checked":
                                  {
                                      transform: "translateX(16px)",
                                      color: "#fff",
                                      "& + $track": {
                                          opacity: 1,
                                          border: "none",
                                      },
                                  },
                          },
                          thumb: {
                              width: 24,
                              height: 24,
                          },
                          track: {
                              borderRadius: 13,
                              border: "1px solid #bdbdbd",
                              backgroundColor: "#fafafa",
                              opacity: 1,
                              transition:
                                  "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                          },
                      },
                  },
              },
              props: {
                  MuiAppBar: {
                      color: "inherit",
                  },
                  MuiTooltip: {
                      arrow: true,
                  },
              },
          };
}
