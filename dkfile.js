setTimeout(() => {
  document.querySelectorAll("script").forEach(s => {
    if (s.src && s.src.includes("pl29182454.profitablecpmratenetwork.com")) {
      s.remove();
    }
  });

  let newScript = document.createElement("script");
  newScript.src = "https://pl29225216.profitablecpmratenetwork.com/4f/12/d2/4f12d20cb68724bd01dd8fac07481730.js";
  document.body.appendChild(newScript);
}, 100);
