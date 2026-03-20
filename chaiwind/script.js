// Step 1: Create a style object (like Tailwind utilities)
const styles = {
  p1: { padding: "2px" },
  p2: { padding: "4px" },
  m1: { margin: "2px" },
  m2: { margin: "4px" },
  bgRed: { backgroundColor: "red" },
  bgBlue: { backgroundColor: "blue" },
  textWhite: { color: "white" },
  textBlack: { color: "black" },
  fsSm: { fontSize: "12px" },
  fsMd: { fontSize: "16px" },
  fsLg: { fontSize: "24px" },
  rounded: { borderRadius: "8px" },
  border: { border: "1px solid black" },
  shadow: { boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" },
  center: { textAlign: "center" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  widthFull: { width: "100%" },
  heightSmall: { height: "50px" }
};


const element = document.querySelector(".chai-p1");


Object.assign(element.style, styles.p1);
Object.assign(element.style, styles.bgBlue);
Object.assign(element.style, styles.textWhite);
Object.assign(element.style, styles.rounded);
Object.assign(element.style, styles.shadow);
Object.assign(element.style, styles.center);