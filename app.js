import { setInfo, loadAC, loadLights } from "./utils/index.js";
const mode = localStorage.getItem("mode");
setInfo();

const object = {
  ac: {
    heat: 22,
    air: true,
    cold: true,
    hot: false,
  },
  lights: {
    livingRoom: false,
    kitchen: true,
    saloon: false,
    bath: true,
  },
};
function consumer() {
  const options = JSON.parse(localStorage.getItem("options"));
  if (options) {
    const { ac, lights } = options;
    loadAC(ac);
    loadLights(lights);
  }
}
if (mode === "consumer") {
  consumer();
}
