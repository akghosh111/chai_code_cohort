(function () {
  "use strict";

  
  const space = v => (isNaN(v) ? null : v * 2 + "px");

  
  const colors = {
    red: "red",
    blue: "blue",
    green: "green",
    black: "black",
    white: "white",
  };

  function parse(cls) {
    
    let m = cls.match(/^(p|m)-(\d+)$/);
    if (m) {
      const prop = m[1] === "p" ? "padding" : "margin";
      return [prop, space(m[2])];
    }

    
    m = cls.match(/^(w|h)-(\d+)$/);
    if (m) {
      const prop = m[1] === "w" ? "width" : "height";
      return [prop, space(m[2])];
    }

    
    if (cls.startsWith("bg-")) {
      const c = colors[cls.slice(3)];
      return c ? ["backgroundColor", c] : null;
    }

    
    if (cls.startsWith("text-")) {
      const c = colors[cls.slice(5)];
      return c ? ["color", c] : null;
    }

    
    if (cls === "flex") return ["display", "flex"];
    if (cls === "block") return ["display", "block"];

    return null;
  }

  function apply(el, cls) {
    if (!cls.startsWith("chai-")) return;

    const res = parse(cls.slice(5));
    if (!res) return;

    const [prop, val] = res;
    el.style[prop] = val;
  }

  function process(root = document) {
    root.querySelectorAll("*").forEach(el => {
      [...el.classList].forEach(cls => {
        if (cls.startsWith("chai-")) {
          apply(el, cls);
          el.classList.remove(cls);
        }
      });
    });
  }

  
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", () => process())
    : process();

  
  window.Chai = { process };
})();