var bump = "js/bump.vg.json";

vegaEmbed("#bump", bump)
  .then(function (result) {})
  .catch(console.error);

var map_marriage = "js/map_marriage.vg.json";
vegaEmbed("#map", map_marriage)
  .then(function (result) {})
  .catch(console.error);

var map_divorce = "js/map_divorce.vg.json";

var histogram_marriage = "js/bar_marriage.vg.json";
vegaEmbed("#bar", histogram_marriage)
  .then(function (result) {})
  .catch(console.error);

var histogram_divorce = "js/bar_divorce.vg.json";

var heatmap = "js/heatmap.vg.json";
vegaEmbed("#heatmap", heatmap)
  .then(function (result) {})
  .catch(console.error);

var spine = "js/spine.vg.json";
vegaEmbed("#spine", spine)
  .then(function (result) {})
  .catch(console.error);

var stacked_bar = "js/stacked_bar.vg.json";
vegaEmbed("#stacked_bar", stacked_bar)
  .then(function (result) {})
  .catch(console.error);

var isotype = "js/isotype.vg.json";
vegaEmbed("#isotype", isotype)
  .then(function (result) {})
  .catch(console.error);

var lollipop = "js/lollipop.vg.json";
vegaEmbed("#lollipop", lollipop)
  .then(function (result) {})
  .catch(console.error);

// Button event listeners
document.getElementById("marriages_button").addEventListener("click", () => {
  vegaEmbed("#map", map_marriage)
    .then(function (result) {})
    .catch(console.error);
  vegaEmbed("#bar", histogram_marriage)
    .then(function (result) {})
    .catch(console.error);
});

document.getElementById("divorces_button").addEventListener("click", () => {
  vegaEmbed("#map", map_divorce)
    .then(function (result) {})
    .catch(console.error);
  vegaEmbed("#bar", histogram_divorce)
    .then(function (result) {})
    .catch(console.error);
});
