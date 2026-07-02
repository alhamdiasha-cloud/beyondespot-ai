// Beyondespot AI Engine v1.0

let TOOLS = [];
let currentTool = null;

// Jalankan saat halaman selesai dimuat
window.onload = async function () {
    await loadTools();
};

// Membaca data tools.json
async function loadTools() {

    try {

        const response = await fetch("data/tools.json");
        TOOLS = await response.json();

        renderSidebar();

    } catch (e) {

        console.error(e);

    }

}

// Membuat menu sidebar otomatis
function renderSidebar() {

    const sidebar = document.getElementById("sidebar");

    if (!sidebar) return;

    sidebar.innerHTML = "";

    TOOLS.forEach(tool => {

        sidebar.innerHTML += `
            <div class="tool-item"
                 onclick="openTool('${tool.id}')">
                ${tool.icon} ${tool.name}
            </div>
        `;

    });

}

// Membuka Tool
function openTool(id) {

    currentTool = TOOLS.find(x => x.id === id);

    if (!currentTool) return;

    document.getElementById("toolTitle").innerHTML =
        currentTool.name;

    document.getElementById("toolCategory").innerHTML =
        currentTool.category;

    buildForm(currentTool);

}

// Membuat Form Sementara
function buildForm(tool) {

    const form = document.getElementById("toolForm");

    form.innerHTML = `

        <label>Judul / Topik</label>

        <input
            id="mainInput"
            type="text"
            placeholder="Masukkan topik..."
        >

        <br><br>

        <button onclick="generateResult()">
            Generate
        </button>

    `;

}

// Generate Sementara
function generateResult() {

    const value =
        document.getElementById("mainInput").value;

    document.getElementById("result").innerHTML = `

        <h3>Preview</h3>

        <hr>

        <p>
        Tool :
        <b>${currentTool.name}</b>
        </p>

        <p>
        Input :
        ${value}
        </p>

        <p style="color:lime;">
        ✔️ Engine berhasil menjalankan tool ini.
        </p>

    `;

}
