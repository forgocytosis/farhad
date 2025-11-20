(function () {
  const el = document.getElementById("typing");
  const text = [
    "<span style='color:#d1b3ff; font-weight:700;'>FARHAD</span> <span style='color: rgba(219, 219, 245, 0.938); font-weight:700;'> here. </span>"
  ];
  const speed = 90; // typing speed
  let i = 0;
  let txtIndex = 0;
  let currentText = "";
  let isTag = false;
  let temp = "";

  function type() {
    currentText = text[txtIndex];
    let char = currentText.slice(i, i + 1);

    if (char === "<") isTag = true;
    if (char === ">") isTag = false;

    temp += char;

    // Only update DOM when not inside a tag
    if (!isTag) {
      el.innerHTML = temp;
    }

    i++;

    if (i < currentText.length) {
      setTimeout(type, isTag ? 0 : speed);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", type);
  } else {
    type();
  }
})();
