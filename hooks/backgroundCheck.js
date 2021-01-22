import FastAverageColor from "fast-average-color";

function AvgColor() {

  const fac = new FastAverageColor();
  fac
    .getColorAsync(container.querySelector(".test-image"))
    .then(function (color) {
      container.style.backgroundColor = color.rgba;
      container.style.color = color.isDark ? "#fff" : "#000";
    })
}

export default AvgColor;
