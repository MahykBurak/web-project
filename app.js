import {
  setInfo,
  loadAC,
  loadCleaner,
  changeCleanerStatus,
  cleanerSelectRoom,
  controlWaterCold,
  controlWaterHot,
  incWaterHeat,
  decWaterHeat,
  selectControl,
  loadWater,
  loadLights,
  incHeat,
  decHeat,
  ACControl,
  controlHeatAir,
  controlHeatCold,
  controlHeatHot,
  changeLightStatus,
} from "./utils/index.js";
const auth = JSON.parse(localStorage.getItem("auth"));
if (!auth) {
  window.location.href = "index.html";
}
const mode = localStorage.getItem("mode");
setInfo();

const defaultObject = {
  ac: {
    status: true,
    heat: 22,
    air: true,
    cold: true,
    hot: false,
  },
  lights: {
    living: false,
    kitchen: true,
    saloon: false,
    bath: true,
  },
  water: {
    heat: 36,
    cold: true,
    hot: false,
  },
  cleaner: {
    status: true,
    room: {
      living: true,
      kitchen: true,
      saloon: true,
      bath: true,
    },
    time: 10,
    startTime: new Date(),
  },
};

const localData = JSON.parse(localStorage.getItem("options"));
if (!localData) {
  localStorage.setItem("options", JSON.stringify(defaultObject));
}
loadAC();
loadLights();
loadWater();
loadCleaner();
const usernametext = document.getElementById("user-name");
const heatContainer = document.getElementById("heat-container");
heatContainer.addEventListener("click", () => selectControl("heat"));
const acbackButton = document.getElementById("heat-back-button");
acbackButton.addEventListener("click", () => selectControl());
const lightsContainer = document.getElementById("lights-container");
lightsContainer.addEventListener("click", () => selectControl("lights"));
const lightsbackButton = document.getElementById("lights-back-button");
lightsbackButton.addEventListener("click", () => selectControl());
const cleanerContainer = document.getElementById("cleaner-container");
cleanerContainer.addEventListener("click", () => selectControl("cleaner"));
const cleanerbackButton = document.getElementById("cleaner-back-button");
cleanerbackButton.addEventListener("click", () => selectControl());
const waterContainer = document.getElementById("water-container");
waterContainer.addEventListener("click", () => selectControl("water"));
const waterBackBtn = document.getElementById("water-back-button");
waterBackBtn.addEventListener("click", () => selectControl());
if (mode === "producer") {
  //heat
  usernametext.innerHTML = "Producer";
  const incHeatBtn = document.getElementById("inc-heat-btn");
  const decHeatBtn = document.getElementById("dec-heat-btn");
  const acControlBtn = document.getElementById("control-ac");
  const acControlAirBtn = document.getElementById("detail-heat-control-air");
  const acControlColdBtn = document.getElementById("detail-heat-control-cold");
  const acControlHotBtn = document.getElementById("detail-heat-control-hot");

  incHeatBtn.classList.remove("hidden");
  decHeatBtn.classList.remove("hidden");
  acControlBtn.classList.remove("hidden");
  incHeatBtn.addEventListener("click", incHeat);
  decHeatBtn.addEventListener("click", decHeat);
  acControlBtn.addEventListener("click", ACControl);
  acControlAirBtn.addEventListener("click", controlHeatAir);
  acControlColdBtn.addEventListener("click", controlHeatCold);
  acControlHotBtn.addEventListener("click", controlHeatHot);

  //lights

  const controlkitchenBtn = document.getElementById("control-kitchen-light");
  controlkitchenBtn.addEventListener("click", () =>
    changeLightStatus("kitchen")
  );
  const controllivingBtn = document.getElementById("control-living-light");
  controllivingBtn.addEventListener("click", () => changeLightStatus("living"));
  const controlsaloonBtn = document.getElementById("control-saloon-light");
  controlsaloonBtn.addEventListener("click", () => changeLightStatus("saloon"));
  const controlbathBtn = document.getElementById("control-bath-light");
  controlbathBtn.addEventListener("click", () => changeLightStatus("bath"));
  const closeAllLightsBtn = document.getElementById("control-close-lights");
  closeAllLightsBtn.addEventListener("click", () => changeLightStatus());
  //water

  const incWaterBtn = document.getElementById("inc-water-btn");
  const decWaterBtn = document.getElementById("dec-water-btn");
  incWaterBtn.addEventListener("click", incWaterHeat);
  decWaterBtn.addEventListener("click", decWaterHeat);
  incWaterBtn.classList.remove("hidden");
  decWaterBtn.classList.remove("hidden");
  const waterControlColdBtn = document.getElementById(
    "detail-water-control-cold"
  );
  const waterControlHotBtn = document.getElementById(
    "detail-water-control-hot"
  );
  waterControlColdBtn.addEventListener("click", controlWaterCold);
  waterControlHotBtn.addEventListener("click", controlWaterHot);
  //cleaner
  const cleanerControlBtn = document.getElementById("cleaner-control");
  cleanerControlBtn.classList.remove("hidden");
  const cleanercontrolroomkitchen = document.getElementById(
    "cleaner-control-room-kitchen"
  );
  const cleanercontrolroomliving = document.getElementById(
    "cleaner-control-room-living"
  );
  const cleanercontrolroombath = document.getElementById(
    "cleaner-control-room-bath"
  );
  const cleanercontrolroomsaloon = document.getElementById(
    "cleaner-control-room-saloon"
  );
  const cleanerstartBtn = document.getElementById("cleaner-control");
  cleanercontrolroomkitchen.addEventListener("click", () =>
    cleanerSelectRoom("kitchen")
  );
  cleanercontrolroomliving.addEventListener("click", () =>
    cleanerSelectRoom("living")
  );
  cleanercontrolroombath.addEventListener("click", () =>
    cleanerSelectRoom("bath")
  );
  cleanercontrolroomsaloon.addEventListener("click", () =>
    cleanerSelectRoom("saloon")
  );
  cleanerstartBtn.addEventListener("click", changeCleanerStatus);
} else {
  const acDetails = document.getElementById("ac-details-main");
  usernametext.innerHTML = "Consumer";
}
