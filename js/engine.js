// Beyondespot AI Engine v2

const app = {
    tools: [],
    currentTool: null
};

document.addEventListener("DOMContentLoaded", start);

async function start() {
    await loadTools();
    buildSidebar();
}

async function loadTools() {

    const response = await fetch("data/tools.json");

    app.tools = await response.json();

}

function buildSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = "";

    app.tools.forEach(tool => {

        const item = document.createElement("div");

        item.className = "tool-item";

        item.textContent = ${tool.icon} ${tool.name};

        item.addEventListener("click", () => {

            openTool(tool);

        });

        sidebar.appendChild(item);

    });

}

function openTool(tool){

    app.currentTool = tool;

    document.getElementById("toolTitle").textContent = tool.name;

    document.getElementById("toolCategory").textContent = tool.category;

    document.getElementById("toolForm").innerHTML = `
        <label>Masukkan Topik</label>

        <input
            id="prompt"
            type="text"
            placeholder="Contoh: Digital Marketing"
        >

        <br><br>

        <button id="generateButton">
            Generate
        </button>
    `;

    document
        .getElementById("generateButton")
        .addEventListener("click", generate);

}
function generate() {

    const input = document.getElementById("prompt").value.trim();

    if (!input) {
        alert("Masukkan topik terlebih dahulu.");
        return;
    }

    const result = document.getElementById("result");

    result.innerHTML = `
        <h2>${app.currentTool.name}</h2>

        <hr><br>

        <p><b>Kategori:</b> ${app.currentTool.category}</p>

        <p><b>Topik:</b> ${input}</p>

        <br>

        <h3>Output</h3>

        <p>
        Beyondespot AI Engine V2 berhasil berjalan.
        </p>

        <p>
        Tool aktif:
        <b>${app.currentTool.name}</b>
        </p>

        <p>
        Topik yang diterima:
        <b>${input}</b>
        </p>

    `;

}
