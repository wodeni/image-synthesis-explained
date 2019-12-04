export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [32, 48, 64],
  fonts: {
    body: "Open sans, sans-serif",
    story: "Comic sans, sans-serif",
    heading: "Open sans, sans-serif",
    monospace: "Courier, monospace"
  },
  fontSizes: [12, 14, 18, 22, 24, 32, 48, 64, 96, 150],
  radii: [0, 2, 4, 16, 9999, "100%"],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25
  },
  colors: {
    text: "#fff",
    annotation: "#383838",
    background: "#dcc2ee",
    bgTrans: "#dcc2ee80",
    primary: "#609",
    secondary: "#306",
    muted: "#f6f6f6",
    // overlay: "#00000050"
    overlay: "#a16fe8b8",
    chip: "rgba(149, 20, 199, 0.8)"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "body",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    strong: {
      fontFamily: "body",
      fontSize: "inherit",
      fontWeight: "bold",
      color: "primary"
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
};
