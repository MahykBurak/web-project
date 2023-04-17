function setInfo() {
  const date = new Date();
  const currentTime = `${date.getHours()}.${date.getMinutes()}`;
  const todayName = date.toLocaleString("en-us", { weekday: "long" });
  const today = date.toLocaleDateString("en-us", {
    day: "numeric",
  });
  const dayNumberContainer = document.getElementById("day-number");
  const dayTextContainer = document.getElementById("day-text");
  const timeContainer = document.getElementById("time");
  dayNumberContainer.innerHTML = today;
  dayTextContainer.innerHTML = todayName;
  timeContainer.innerHTML = currentTime;
}
function getLocal() {
  return JSON.parse(localStorage.getItem("options"));
}
function loadAC() {
  const { ac } = getLocal();
  const { heat, air, cold, hot, status } = ac;
  const heatValue = document.getElementById("heat-value");
  const heatStatus = document.getElementById("heat-status");
  const heatControlAir = document.getElementById("heat-control-air");
  const heatControlCold = document.getElementById("heat-control-cold");
  const heatControlHot = document.getElementById("heat-control-hot");
  const detailHeatValue = document.getElementById("control-heat-value");
  const detailheatControlAir = document.getElementById(
    "detail-heat-control-air"
  );
  const detailheatControlCold = document.getElementById(
    "detail-heat-control-cold"
  );
  const detailheatControlHot = document.getElementById(
    "detail-heat-control-hot"
  );
  const acControlText = document.getElementById("ac-control-text");
  const AirActiveIcon = '<img src="assets/air.png"/>';
  const AirInactiveIcon = '<img src="assets/air-inactive.png"/>';
  const ColdActiveIcon = '<img src="assets/cold.png"/>';
  const ColdInactiveIcon = '<img src="assets/cold-inactive.png"/>';
  const HotActiveIcon = '<img src="assets/sun.png"/>';
  const HotInactiveIcon = '<img src="assets/sun-inactive.png"/>';
  heatValue.innerHTML = heat + "°C";
  detailHeatValue.innerHTML = heat + "°C";
  acControlText.innerHTML = status ? "ON" : "OFF";
  heatStatus.innerHTML = status ? "ON" : "OFF";
  if (air) {
    heatControlAir.classList.remove("inactive-control-heat");
    heatControlAir.classList.add("active-control");
    detailheatControlAir.classList.remove("inactive-control-heat");
    detailheatControlAir.classList.add("active-control");
    heatControlAir.innerHTML = AirActiveIcon;
    detailheatControlAir.innerHTML = AirActiveIcon;
  } else {
    heatControlAir.classList.remove("active-control");

    detailheatControlAir.classList.remove("active-control");

    heatControlAir.classList.add("inactive-control-heat");
    detailheatControlAir.classList.add("inactive-control-heat");
    heatControlAir.innerHTML = AirInactiveIcon;
    detailheatControlAir.innerHTML = AirInactiveIcon;
  }
  if (cold) {
    heatControlCold.classList.remove("inactive-control-heat");
    heatControlCold.classList.add("active-control");
    detailheatControlCold.classList.remove("inactive-control-heat");
    detailheatControlCold.classList.add("active-control");

    heatControlCold.innerHTML = ColdActiveIcon;
    detailheatControlCold.innerHTML = ColdActiveIcon;
  } else {
    heatControlCold.classList.remove("active-control");
    detailheatControlCold.classList.remove("active-control");
    heatControlCold.classList.add("inactive-control-heat");
    detailheatControlCold.classList.add("inactive-control-heat");
    heatControlCold.innerHTML = ColdInactiveIcon;
    detailheatControlCold.innerHTML = ColdInactiveIcon;
  }
  if (hot) {
    heatControlHot.classList.remove("inactive-control-heat");
    heatControlHot.classList.add("active-control");
    detailheatControlHot.classList.remove("inactive-control-heat");
    detailheatControlHot.classList.add("active-control");
    heatControlHot.innerHTML = HotActiveIcon;
    detailheatControlHot.innerHTML = HotActiveIcon;
  } else {
    heatControlHot.classList.remove("active-control");
    detailheatControlHot.classList.remove("active-control");
    heatControlHot.classList.add("inactive-control-heat");
    detailheatControlHot.classList.add("inactive-control-heat");
    heatControlHot.innerHTML = HotInactiveIcon;
    detailheatControlHot.innerHTML = HotInactiveIcon;
  }
}

function loadLights() {
  const { lights } = JSON.parse(localStorage.getItem("options"));
  const { kitchen, living, saloon, bath } = lights;
  const lightsKitchenImg = document.getElementById("lights-kitchen-img");
  const lightsLivingRoomImg = document.getElementById("lights-living-img");
  const lightsSaloonImg = document.getElementById("lights-saloon-img");
  const lightsBathImg = document.getElementById("lights-bath-img");
  const controlkitchen = document.getElementById("control-kitchen-light");
  const controlliving = document.getElementById("control-living-light");
  const controlsaloon = document.getElementById("control-saloon-light");
  const controlbath = document.getElementById("control-bath-light");
  const kitchencontrolImage = document.getElementById("kitchen-control-img");
  const livingcontrolImage = document.getElementById("living-control-img");
  const salooncontrolImage = document.getElementById("saloon-control-img");
  const bathcontrolImage = document.getElementById("bath-control-img");
  const controlkitchenLabel = document.getElementById("control-kitchen-label");
  const controllivingLabel = document.getElementById("control-living-label");
  const controlsaloonLabel = document.getElementById("control-saloon-label");
  const controlbathLabel = document.getElementById("control-bath-label");

  const lightsActiveIcon = '<img src="assets/lights-on.png"/>';
  const lightsInactiveIcon = '<img src="assets/lights-off.png"/>';
  if (kitchen) {
    lightsKitchenImg.innerHTML = lightsActiveIcon;
    kitchencontrolImage.innerHTML = lightsActiveIcon;
    controlkitchenLabel.classList.add("text-white");
    controlkitchen.classList.remove("bg-black/10");
    controlkitchen.classList.add("border");
    controlkitchen.classList.add("border-white");
    controlkitchen.classList.add("bg-black/30");
  } else {
    lightsKitchenImg.innerHTML = lightsInactiveIcon;
    kitchencontrolImage.innerHTML = lightsInactiveIcon;
    controlkitchenLabel.classList.remove("text-white");
    controlkitchen.classList.add("bg-black/10");
    controlkitchen.classList.remove("border");
    controlkitchen.classList.remove("border-white");
    controlkitchen.classList.remove("bg-black/30");
  }
  if (living) {
    lightsLivingRoomImg.innerHTML = lightsActiveIcon;
    livingcontrolImage.innerHTML = lightsActiveIcon;
    controllivingLabel.classList.add("text-white");
    controlliving.classList.remove("bg-black/10");
    controlliving.classList.add("border");
    controlliving.classList.add("border-white");
    controlliving.classList.add("bg-black/30");
  } else {
    lightsLivingRoomImg.innerHTML = lightsInactiveIcon;
    livingcontrolImage.innerHTML = lightsInactiveIcon;
    controllivingLabel.classList.remove("text-white");
    controlliving.classList.add("bg-black/10");
    controlliving.classList.remove("border");
    controlliving.classList.remove("border-white");
    controlliving.classList.remove("bg-black/30");
  }
  if (saloon) {
    lightsSaloonImg.innerHTML = lightsActiveIcon;
    salooncontrolImage.innerHTML = lightsActiveIcon;
    controlsaloonLabel.classList.add("text-white");
    controlsaloon.classList.remove("bg-black/10");
    controlsaloon.classList.add("border");
    controlsaloon.classList.add("border-white");
    controlsaloon.classList.add("bg-black/30");
  } else {
    lightsSaloonImg.innerHTML = lightsInactiveIcon;
    salooncontrolImage.innerHTML = lightsInactiveIcon;
    controlsaloonLabel.classList.remove("text-white");
    controlsaloon.classList.add("bg-black/10");
    controlsaloon.classList.remove("border");
    controlsaloon.classList.remove("border-white");
    controlsaloon.classList.remove("bg-black/30");
  }
  if (bath) {
    lightsBathImg.innerHTML = lightsActiveIcon;
    bathcontrolImage.innerHTML = lightsActiveIcon;
    controlbathLabel.classList.add("text-white");
    controlbath.classList.remove("bg-black/10");
    controlbath.classList.add("border");
    controlbath.classList.add("border-white");
    controlbath.classList.add("bg-black/30");
  } else {
    lightsBathImg.innerHTML = lightsInactiveIcon;
    bathcontrolImage.innerHTML = lightsInactiveIcon;
    controlbathLabel.classList.remove("text-white");
    controlbath.classList.add("bg-black/10");
    controlbath.classList.remove("border");
    controlbath.classList.remove("border-white");
    controlbath.classList.remove("bg-black/30");
  }
}

function loadWater() {
  const { water } = getLocal();
  const { cold, hot, heat } = water;
  const waterHeatValue = document.getElementById("water-heat-value");
  const waterColdControl = document.getElementById("water-control-cold");
  const waterHotControl = document.getElementById("water-control-hot");
  const controlWaterHeatValue = document.getElementById("control-water-value");
  const detailColdControl = document.getElementById(
    "detail-water-control-cold"
  );
  const detailHotControl = document.getElementById("detail-water-control-hot");
  const ColdActiveIcon = '<img src="assets/cold.png"/>';
  const ColdInactiveIcon = '<img src="assets/cold-inactive.png"/>';
  const HotActiveIcon = '<img src="assets/sun.png"/>';
  const HotInactiveIcon = '<img src="assets/sun-inactive.png"/>';
  waterHeatValue.innerHTML = heat + "°C";
  controlWaterHeatValue.innerHTML = heat + "°C";
  if (cold) {
    waterColdControl.classList.remove("inactive-control-water");
    waterColdControl.classList.add("active-control");
    waterColdControl.innerHTML = ColdActiveIcon;
    detailColdControl.classList.remove("inactive-control-water");
    detailColdControl.classList.add("active-control");
    detailColdControl.innerHTML = ColdActiveIcon;
  } else {
    waterColdControl.classList.remove("active-control");
    waterColdControl.classList.add("inactive-control-water");
    waterColdControl.innerHTML = ColdInactiveIcon;
    detailColdControl.classList.remove("active-control");
    detailColdControl.classList.add("inactive-control-water");
    detailColdControl.innerHTML = ColdInactiveIcon;
  }
  if (hot) {
    waterHotControl.classList.remove("inactive-control-water");
    waterHotControl.classList.add("active-control");
    waterHotControl.innerHTML = HotActiveIcon;
    detailHotControl.classList.remove("inactive-control-water");
    detailHotControl.classList.add("active-control");
    detailHotControl.innerHTML = HotActiveIcon;
  } else {
    waterHotControl.classList.remove("active-control");
    waterHotControl.classList.add("inactive-control-water");
    waterHotControl.innerHTML = HotInactiveIcon;
    detailHotControl.classList.remove("active-control");
    detailHotControl.classList.add("inactive-control-water");
    detailHotControl.innerHTML = HotInactiveIcon;
  }
}

function loadCleaner() {
  const { cleaner } = getLocal();
  const { status, room, time, startTime } = cleaner;
  const cleanerRoomText = document.getElementById("cleaner-current-room");
  const cleanerTimeText = document.getElementById("cleaner-remaining-time");
  const cleanerStatusText = document.getElementById("cleaner-status-text");
  const cleanerControlArea = document.getElementById("cleaner-control-area");
  const cleanerControlTime = document.getElementById(
    "cleaner-control-remaining-time"
  );
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
  const cleanercontroltext = document.getElementById("cleaner-control-text");
  cleanerStatusText.innerHTML = status ? "running" : "not running";
  let defaultArea = 0;
  cleanerRoomText.innerHTML = "";
  Object.keys(room).forEach((key) => {
    if (room[key]) {
      cleanerRoomText.innerHTML += `-${key}</br>`;
      defaultArea += 50;
      if (key === "kitchen") {
        cleanercontrolroomkitchen.classList.remove("cleaner-inactive-room");
        cleanercontrolroomkitchen.classList.add("cleaner-active-room");
      }
      if (key === "living") {
        cleanercontrolroomliving.classList.remove("cleaner-inactive-room");
        cleanercontrolroomliving.classList.add("cleaner-active-room");
      }
      if (key === "bath") {
        cleanercontrolroombath.classList.remove("cleaner-inactive-room");
        cleanercontrolroombath.classList.add("cleaner-active-room");
      }
      if (key === "saloon") {
        cleanercontrolroomsaloon.classList.remove("cleaner-inactive-room");
        cleanercontrolroomsaloon.classList.add("cleaner-active-room");
      }
    } else {
      if (key === "kitchen") {
        cleanercontrolroomkitchen.classList.remove("cleaner-active-room");
        cleanercontrolroomkitchen.classList.add("cleaner-inactive-room");
      }
      if (key === "living") {
        cleanercontrolroomliving.classList.remove("cleaner-active-room");
        cleanercontrolroomliving.classList.add("cleaner-inactive-room");
      }
      if (key === "bath") {
        cleanercontrolroombath.classList.remove("cleaner-active-room");
        cleanercontrolroombath.classList.add("cleaner-inactive-room");
      }
      if (key === "saloon") {
        cleanercontrolroomsaloon.classList.remove("cleaner-active-room");
        cleanercontrolroomsaloon.classList.add("cleaner-inactive-room");
      }
    }
  });
  const now = new Date();
  const diff = now.getTime() - new Date(startTime);
  const diffInMinutes = diff / (1000 * 60);
  const remainingTime = time - diffInMinutes.toFixed(0);
  cleanerTimeText.innerHTML =
    remainingTime > 0 ? remainingTime + " min" : "Finished!";
  cleanerControlTime.innerHTML =
    remainingTime > 0 ? remainingTime + " min" : "Finished!";
  cleanerControlArea.innerHTML = defaultArea + " m2";
  cleanercontroltext.innerHTML = status ? "Stop" : "Start";
}

function ACControl() {
  const { ac: currentAc, ...others } = getLocal();
  const { status: current, ...othersAc } = currentAc;
  const newOptions = {
    ac: {
      status: !current,
      ...othersAc,
    },
    ...others,
  };
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadAC();
}
function incHeat() {
  const options = JSON.parse(localStorage.getItem("options"));
  const currentAc = options.ac;
  const currentHeat = currentAc.heat++;
  if (currentHeat < 30) {
    const newOptions = {
      ac: {
        heat: currentHeat,
        ...currentAc,
      },
      ...options,
    };
    localStorage.removeItem("options");
    localStorage.setItem("options", JSON.stringify(newOptions));
    loadAC();
  }
}
function controlHeatAir() {
  const { ac: currentAc, ...others } = getLocal();
  const { air: current, ...othersAc } = currentAc;
  const newOptions = {
    ac: {
      air: !current,
      ...othersAc,
    },
    ...others,
  };
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadAC();
}

function controlHeatCold() {
  const { ac: currentAc, ...others } = getLocal();
  const { cold: currentCold, hot: currentHot, ...othersAc } = currentAc;
  const newCold = !currentCold;
  const newOptions = {
    ac: {
      cold: newCold,
      hot: currentHot && newCold ? false : currentHot,
      ...othersAc,
    },
    ...others,
  };
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadAC();
}
function controlHeatHot() {
  const { ac: currentAc, ...others } = getLocal();
  const { cold: currentCold, hot: currentHot, ...othersAc } = currentAc;
  const newHot = !currentHot;
  const newOptions = {
    ac: {
      hot: newHot,
      cold: currentCold && newHot ? false : currentCold,
      ...othersAc,
    },
    ...others,
  };
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadAC();
}
function decHeat() {
  const options = JSON.parse(localStorage.getItem("options"));
  const currentAc = options.ac;
  const currentHeat = currentAc.heat--;
  if (currentHeat > 17) {
    const newOptions = {
      ac: {
        heat: currentHeat,
        ...currentAc,
      },
      ...options,
    };

    localStorage.removeItem("options");
    localStorage.setItem("options", JSON.stringify(newOptions));
    loadAC();
  }
}

function selectControl(label) {
  const controls = ["heat", "lights", "water", "cleaner"];
  controls.forEach((control) => {
    const currentRef = document.getElementById(`${control}-control-container`);
    if (control === label) {
      currentRef.classList.remove("hidden");
    } else {
      currentRef.classList.add("hidden");
    }
  });
}
function changeLightStatus(label) {
  const { lights: currentLights, ...others } = getLocal();
  const current = currentLights[label];
  let newOptions;
  if (!label) {
    newOptions = {
      lights: {
        ...Object.keys(currentLights).reduce((obj, key) => {
          obj[key] = false;
          return obj;
        }, {}),
      },
      ...others,
    };
  } else {
    newOptions = {
      lights: {
        [label]: !current,
        ...Object.keys(currentLights)
          .filter((key) => key !== label)
          .reduce((obj, key) => {
            obj[key] = currentLights[key];
            return obj;
          }, {}),
      },
      ...others,
    };
  }
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadLights();
}

function incWaterHeat() {
  const { water: currentWater, ...others } = getLocal();
  const { heat: currentHeat, ...othersWater } = currentWater;
  const newHeat = currentHeat + 1;
  if (currentHeat < 50) {
    const newOptions = {
      water: {
        heat: newHeat,
        ...othersWater,
      },
      ...others,
    };
    localStorage.removeItem("options");
    localStorage.setItem("options", JSON.stringify(newOptions));
    loadWater();
  }
}
function decWaterHeat() {
  const { water: currentWater, ...others } = getLocal();
  const { heat: currentHeat, ...othersWater } = currentWater;
  const newHeat = currentHeat - 1;
  if (currentHeat > 10) {
    const newOptions = {
      water: {
        heat: newHeat,
        ...othersWater,
      },
      ...others,
    };
    localStorage.removeItem("options");
    localStorage.setItem("options", JSON.stringify(newOptions));
    loadWater();
  }
}

function controlWaterCold() {
  const { water: currentWater, ...others } = getLocal();

  const { cold: currentCold, hot: currentHot, ...othersWater } = currentWater;
  const newCold = !currentCold;
  const newOptions = {
    water: {
      cold: newCold,
      hot: currentHot && newCold ? false : currentHot,
      ...othersWater,
    },
    ...others,
  };
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadWater();
}
function controlWaterHot() {
  const { water: currentWater, ...others } = getLocal();
  const { cold: currentCold, hot: currentHot, ...othersWater } = currentWater;
  const newHot = !currentHot;
  const newOptions = {
    water: {
      hot: newHot,
      cold: currentCold && newHot ? false : currentCold,
      ...othersWater,
    },
    ...others,
  };
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadWater();
}
function cleanerSelectRoom(label) {
  const { cleaner: currentCleaner, ...others } = getLocal();
  const { room: currentRooms, ...othersCleaner } = currentCleaner;
  const current = currentRooms[label];
  let newOptions;
  if (!label) {
    newOptions = {
      cleaner: {
        room: {
          ...Object.keys(currentLights).reduce((obj, key) => {
            obj[key] = false;
            return obj;
          }, {}),
        },
        ...othersCleaner,
      },
      ...others,
    };
  } else {
    newOptions = {
      cleaner: {
        room: {
          [label]: !current,
          ...Object.keys(currentRooms)
            .filter((key) => key !== label)
            .reduce((obj, key) => {
              obj[key] = currentRooms[key];
              return obj;
            }, {}),
        },
        ...othersCleaner,
      },
      ...others,
    };
  }
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadCleaner();
}
function changeCleanerStatus() {
  const { cleaner, ...others } = getLocal();
  const { status: currentStatus, startTime, ...othersCleaner } = cleaner;
  const { room } = othersCleaner;
  const newStatus = !currentStatus;
  let time = startTime;
  if (newStatus) {
    time = new Date();
    console.log(
      Object.keys(room).filter((key) => room[key] === true).length === 0
    );
    if (Object.keys(room).filter((key) => room[key] === true).length === 0) {
      alert("Please select a room to clean");
      return;
    }
  }
  const newOptions = {
    cleaner: {
      status: newStatus,
      startTime: time,
      ...othersCleaner,
    },
    ...others,
  };
  localStorage.removeItem("options");
  localStorage.setItem("options", JSON.stringify(newOptions));
  loadCleaner();
}
export {
  setInfo,
  incWaterHeat,
  changeCleanerStatus,
  cleanerSelectRoom,
  loadCleaner,
  controlWaterCold,
  controlWaterHot,
  decWaterHeat,
  loadAC,
  loadWater,
  selectControl,
  loadLights,
  incHeat,
  decHeat,
  ACControl,
  controlHeatAir,
  controlHeatCold,
  controlHeatHot,
  changeLightStatus,
};
