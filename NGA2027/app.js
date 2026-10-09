/*
  Cấu trúc dữ liệu đã được cập nhật chính xác giá mới cho Selection 1
*/
const selectionData = {
  selection1: {
    label: "Anex-PR22200BB",
    buttons: {
      thapDiem: [
        { id: "sc", label: "01 SC", text: " + 01 SC (357,000 VND/TE/N)" },
        { id: "ebc", label: "01 EBC", text: " + 01 EBC (238,000 VND/TE/N)" },
        { id: "eba", label: "01 EBA", text: " + 01 EBA (1,173,000 VND/R/N)" }
      ],
      caoDiem: [
        { id: "sc", label: "01 SC", text: " + 01 SC (442,000 VND/TE/N)" },
        { id: "ebc", label: "01 EBC", text: " + 01 EBC (289,000 VND/TE/N)" },
        { id: "eba", label: "01 EBA", text: " + 01 EBA (1,453,500 VND/R/N)" }
      ]
    },
    texts: {
      thapDiem: {
        under10: { 
          city: `RM (1,912,000 VND r/n) + BB to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          ocean: `RM (2,336,000 VND r/n) + BB to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          front: `RM (2,512,000 VND r/n) + BB to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.` 
        },
        over10: { 
          city: `RM (1,912,000 VND r/n) + BB + 01 night FOC to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          ocean: `RM (2,336,000 VND r/n) + BB + 01 night FOC to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          front: `RM (2,512,000 VND r/n) + BB + 01 night FOC to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.` 
        }
      },
      caoDiem: {
        under10: { 
          city: `RM (2,303,000 VND r/n) + BB to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          ocean: `RM (2,758,000 VND r/n) + BB to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          front: `RM (2,933,000 VND r/n) + BB to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.` 
        },
        over10: { 
          city: `RM (2,303,000 VND r/n) + BB + 01 night FOC to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          ocean: `RM (2,758,000 VND r/n) + BB + 01 night FOC to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.`, 
          front: `RM (2,933,000 VND r/n) + BB + 01 night FOC to TA after C/o\nXtra to POA\nGiảm 20% giá công bố cho tất cả các dịch vụ onsite bao gồm FB và minibar (không bao gồm rượu mạnh), SPA, Laundry (không bao gồm giặt khô và giặt nhanh) & room services.` 
        }
      }
    }
  },
  selection2: {
    label: "Anex-I1BBOD",
    buttons: {
      thapDiem: [
        { id: "sc", label: "02 SC", text: " + 02 SC (Thấp điểm)" },
        { id: "ebc", label: "02 EBC", text: " + 02 EBC (Thấp điểm)" },
        { id: "eba", label: "02 EBA", text: " + 02 EBA (Thấp điểm)" }
      ],
      caoDiem: [
        { id: "sc", label: "02 SC", text: " + 02 SC (Cao điểm)" },
        { id: "ebc", label: "02 EBC", text: " + 02 EBC (Cao điểm)" },
        { id: "eba", label: "02 EBA", text: " + 02 EBA (Cao điểm)" }
      ]
    },
    texts: {
      thapDiem: {
        under10: { city: `Anex-I1BBOD Thấp điểm - City dưới 10 đêm + BB`, ocean: `Anex-I1BBOD Thấp điểm - Ocean dưới 10 đêm + BB`, front: `Anex-I1BBOD Thấp điểm - Front dưới 10 đêm + BB` },
        over10:  { city: `Anex-I1BBOD Thấp điểm - City trên 10 đêm + BB`, ocean: `Anex-I1BBOD Thấp điểm - Ocean trên 10 đêm + BB`, front: `Anex-I1BBOD Thấp điểm - Front trên 10 đêm + BB` }
      },
      caoDiem: {
        under10: { city: `Anex-I1BBOD CAO ĐIỂM - City dưới 10 đêm + BB`, ocean: `Anex-I1BBOD CAO ĐIỂM - Ocean dưới 10 đêm + BB`, front: `Anex-I1BBOD CAO ĐIỂM - Front dưới 10 đêm + BB` },
        over10:  { city: `Anex-I1BBOD CAO ĐIỂM - City trên 10 đêm + BB`, ocean: `Anex-I1BBOD CAO ĐIỂM - Ocean trên 10 đêm + BB`, front: `Anex-I1BBOD CAO ĐIỂM - Front trên 10 đêm + BB` }
      }
    }
  },
  selection3: {
    label: "PR22200BB",
    buttons: {
      thapDiem: [
        { id: "sc", label: "03 SC", text: " + 03 SC (Thấp điểm)" },
        { id: "ebc", label: "03 EBC", text: " + 03 EBC (Thấp điểm)" },
        { id: "eba", label: "03 EBA", text: " + 03 EBA (Thấp điểm)" }
      ],
      caoDiem: [
        { id: "sc", label: "03 SC", text: " + 03 SC (Cao điểm)" },
        { id: "ebc", label: "03 EBC", text: " + 03 EBC (Cao điểm)" },
        { id: "eba", label: "03 EBA", text: " + 03 EBA (Cao điểm)" }
      ]
    },
    texts: {
      thapDiem: {
        under10: { city: `PR22200BB Thấp điểm - City dưới 10 đêm + BB`, ocean: `PR22200BB Thấp điểm - Ocean dưới 10 đêm + BB`, front: `PR22200BB Thấp điểm - Front dưới 10 đêm + BB` },
        over10:  { city: `PR22200BB Thấp điểm - City trên 10 đêm + BB`, ocean: `PR22200BB Thấp điểm - Ocean trên 10 đêm + BB`, front: `PR22200BB Thấp điểm - Front trên 10 đêm + BB` }
      },
      caoDiem: {
        under10: { city: `PR22200BB CAO ĐIỂM - City dưới 10 đêm + BB`, ocean: `PR22200BB CAO ĐIỂM - Ocean dưới 10 đêm + BB`, front: `PR22200BB CAO ĐIỂM - Front dưới 10 đêm + BB` },
        over10:  { city: `PR22200BB CAO ĐIỂM - City trên 10 đêm + BB`, ocean: `PR22200BB CAO ĐIỂM - Ocean trên 10 đêm + BB`, front: `PR22200BB CAO ĐIỂM - Front trên 10 đêm + BB` }
      }
    }
  },
  selection4: {
    label: "I1BBOD",
    buttons: {
      thapDiem: [
        { id: "sc", label: "04 SC", text: " + 04 SC (Thấp điểm)" },
        { id: "ebc", label: "04 EBC", text: " + 04 EBC (Thấp điểm)" },
        { id: "eba", label: "04 EBA", text: " + 04 EBA (Thấp điểm)" }
      ],
      caoDiem: [
        { id: "sc", label: "04 SC", text: " + 04 SC (Cao điểm)" },
        { id: "ebc", label: "04 EBC", text: " + 04 EBC (Cao điểm)" },
        { id: "eba", label: "04 EBA", text: " + 04 EBA (Cao điểm)" }
      ]
    },
    texts: {
      thapDiem: {
        under10: { city: `I1BBOD Thấp điểm - City dưới 10 đêm + BB`, ocean: `I1BBOD Thấp điểm - Ocean dưới 10 đêm + BB`, front: `I1BBOD Thấp điểm - Front dưới 10 đêm + BB` },
        over10:  { city: `I1BBOD Thấp điểm - City trên 10 đêm + BB`, ocean: `I1BBOD Thấp điểm - Ocean trên 10 đêm + BB`, front: `I1BBOD Thấp điểm - Front trên 10 đêm + BB` }
      },
      caoDiem: {
        under10: { city: `I1BBOD CAO ĐIỂM - City dưới 10 đêm + BB`, ocean: `I1BBOD CAO ĐIỂM - Ocean dưới 10 đêm + BB`, front: `I1BBOD CAO ĐIỂM - Front dưới 10 đêm + BB` },
        over10:  { city: `I1BBOD CAO ĐIỂM - City trên 10 đêm + BB`, ocean: `I1BBOD CAO ĐIỂM - Ocean trên 10 đêm + BB`, front: `I1BBOD CAO ĐIỂM - Front trên 10 đêm + BB` }
      }
    }
  },
  selection5: {
    label: "HBBBFS",
    buttons: {
      thapDiem: [
        { id: "sc", label: "05 SC", text: " + 05 SC (Thấp điểm)" },
        { id: "ebc", label: "05 EBC", text: " + 05 EBC (Thấp điểm)" },
        { id: "eba", label: "05 EBA", text: " + 05 EBA (Thấp điểm)" }
      ],
      caoDiem: [
        { id: "sc", label: "05 SC", text: " + 05 SC (Cao điểm)" },
        { id: "ebc", label: "05 EBC", text: " + 05 EBC (Cao điểm)" },
        { id: "eba", label: "05 EBA", text: " + 05 EBA (Cao điểm)" }
      ]
    },
    texts: {
      thapDiem: {
        under10: { city: `HBBBFS Thấp điểm - City dưới 10 đêm + BB`, ocean: `HBBBFS Thấp điểm - Ocean dưới 10 đêm + BB`, front: `HBBBFS Thấp điểm - Front dưới 10 đêm + BB` },
        over10:  { city: `HBBBFS Thấp điểm - City trên 10 đêm + BB`, ocean: `HBBBFS Thấp điểm - Ocean trên 10 đêm + BB`, front: `HBBBFS Thấp điểm - Front trên 10 đêm + BB` }
      },
      caoDiem: {
        under10: { city: `HBBBFS CAO ĐIỂM - City dưới 10 đêm + BB`, ocean: `HBBBFS CAO ĐIỂM - Ocean dưới 10 đêm + BB`, front: `HBBBFS CAO ĐIỂM - Front dưới 10 đêm + BB` },
        over10:  { city: `HBBBFS CAO ĐIỂM - City trên 10 đêm + BB`, ocean: `HBBBFS CAO ĐIỂM - Ocean trên 10 đêm + BB`, front: `HBBBFS CAO ĐIỂM - Front trên 10 đêm + BB` }
      }
    }
  }
};

const selectionMenu = document.getElementById("selectionMenu");
const selectionHint = document.getElementById("selectionHint");
const resultScreen = document.getElementById("resultScreen");
const codeButtons = document.getElementById("codeButtons");
const boxesWrapper = document.getElementById("boxesWrapper");

// Các ô Text Elements
const under10City = document.getElementById("under10_city");
const under10Ocean = document.getElementById("under10_ocean");
const under10Front = document.getElementById("under10_front");

const over10City = document.getElementById("over10_city");
const over10Ocean = document.getElementById("over10_ocean");
const over10Front = document.getElementById("over10_front");

const cleanButton = document.getElementById("cleanButton");
const btnCaoDiem = document.getElementById("btnCaoDiem");
const btnThapDiem = document.getElementById("btnThapDiem");

let activeSelectionKey = null;
let currentSeason = "thapDiem";

// Lưu danh sách ID các nút đang được bấm chọn
const selectedButtonIds = new Set();

function buildSelectionMenu() {
  Object.entries(selectionData).forEach(([key, item]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "selection-option";
    button.textContent = item.label;
    button.dataset.selectionKey = key;
    button.addEventListener("click", () => openSelection(key));
    selectionMenu.appendChild(button);
  });
}

function updateActiveSelectionButton() {
  document.querySelectorAll(".selection-option").forEach(button => {
    const isActive = button.dataset.selectionKey === activeSelectionKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function openSelection(key) {
  activeSelectionKey = key;
  selectedButtonIds.clear();
  currentSeason = "thapDiem";

  const item = selectionData[key];
  resultScreen.classList.add("active");
  selectionHint.textContent = `Đang chọn: ${item.label}. Bạn có thể chọn Selection khác ngay tại đây.`;

  updateActiveSelectionButton();
  updateSeasonButtons();
  renderCodeButtons();
  renderTexts();
}

function renderCodeButtons() {
  if (!activeSelectionKey) return;
  codeButtons.innerHTML = "";

  const currentButtons = selectionData[activeSelectionKey].buttons[currentSeason];

  currentButtons.forEach(btnObj => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-button";
    button.textContent = btnObj.label;
    
    const isSelected = selectedButtonIds.has(btnObj.id);
    if (isSelected) {
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", () => {
      if (selectedButtonIds.has(btnObj.id)) {
        selectedButtonIds.delete(btnObj.id);
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
      } else {
        selectedButtonIds.add(btnObj.id);
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
      }
      renderTexts();
    });

    codeButtons.appendChild(button);
  });
}

/* Lấy nội dung chi tiết từ nút chọn theo mùa hiện tại và chèn vào sau BB */
function getDisplayText(baseText) {
  if (!baseText) return "";
  if (selectedButtonIds.size === 0) return baseText;

  const currentButtons = selectionData[activeSelectionKey].buttons[currentSeason];
  
  const addedTextsString = currentButtons
    .filter(btn => selectedButtonIds.has(btn.id))
    .map(btn => btn.text)
    .join("");

  if (/BB/i.test(baseText)) {
    return baseText.replace(/BB/i, `BB${addedTextsString}`);
  }

  return baseText + addedTextsString;
}

function renderTexts() {
  if (!activeSelectionKey) return;
  
  const seasonData = selectionData[activeSelectionKey].texts[currentSeason];

  under10City.textContent = getDisplayText(seasonData.under10.city);
  under10Ocean.textContent = getDisplayText(seasonData.under10.ocean);
  under10Front.textContent = getDisplayText(seasonData.under10.front);

  over10City.textContent = getDisplayText(seasonData.over10.city);
  over10Ocean.textContent = getDisplayText(seasonData.over10.ocean);
  over10Front.textContent = getDisplayText(seasonData.over10.front);
}

/* Sao chép văn bản trong ô text vào bộ nhớ đệm (Clipboard) */
function copyBoxText(elementId, btnElement) {
  const textBox = document.getElementById(elementId);
  if (!textBox || !textBox.textContent) return;

  navigator.clipboard.writeText(textBox.textContent).then(() => {
    btnElement.textContent = "Copied!";
    btnElement.classList.add("copied");

    setTimeout(() => {
      btnElement.textContent = "Copy";
      btnElement.classList.remove("copied");
    }, 1500);
  }).catch(err => {
    console.error("Lỗi khi sao chép: ", err);
  });
}

/* Chuyển mùa kèm hiệu ứng trượt mượt */
function switchSeason(targetSeason, fadeOutClass) {
  if (currentSeason === targetSeason || !activeSelectionKey) return;

  boxesWrapper.classList.add(fadeOutClass);

  setTimeout(() => {
    currentSeason = targetSeason;
    updateSeasonButtons();
    renderCodeButtons();
    renderTexts();

    boxesWrapper.classList.remove(fadeOutClass);
  }, 200);
}

function updateSeasonButtons() {
  if (currentSeason === "thapDiem") {
    btnCaoDiem.style.display = "flex";
    btnThapDiem.style.display = "none";
  } else {
    btnCaoDiem.style.display = "none";
    btnThapDiem.style.display = "flex";
  }
}

btnCaoDiem.addEventListener("click", () => switchSeason("caoDiem", "fade-out-left"));
btnThapDiem.addEventListener("click", () => switchSeason("thapDiem", "fade-out-right"));

function cleanAndRestart() {
  activeSelectionKey = null;
  selectedButtonIds.clear();
  currentSeason = "thapDiem";

  resultScreen.classList.remove("active");
  updateActiveSelectionButton();
  selectionHint.textContent = "Chọn 1 trong 5 Selection để mở nội dung tương ứng.";

  under10City.textContent = "";
  under10Ocean.textContent = "";
  under10Front.textContent = "";
  over10City.textContent = "";
  over10Ocean.textContent = "";
  over10Front.textContent = "";
  codeButtons.innerHTML = "";
}

cleanButton.addEventListener("click", cleanAndRestart);

buildSelectionMenu();