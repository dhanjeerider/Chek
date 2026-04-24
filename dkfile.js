/*(function() {

  const OLD_SRC = "pl29182454.profitablecpmratenetwork.com";
  const NEW_SRC = "https://pl29225216.profitablecpmratenetwork.com/4f/12/d2/4f12d20cb68724bd01dd8fac07481730.js";

  // === REMOVE OLD SCRIPT ===
  document.querySelectorAll("script").forEach(s => {
    if (s.src && s.src.includes(OLD_SRC)) {
      s.remove();
    }
  });

  // === ADD NEW SCRIPT (ONLY IF NOT ALREADY ADDED) ===
  if (!document.querySelector(`script[src="${NEW_SRC}"]`)) {
    let newScript = document.createElement("script");
    newScript.src = NEW_SRC;
    newScript.async = true;
    document.body.appendChild(newScript);
  }

})();*/
