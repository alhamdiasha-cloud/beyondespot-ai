let tools = [];

async function init() {
    const res = await fetch("data/tools.json");
    tools = await res.json();

    renderSidebar();
}

function renderSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = "";

    tools.forEach(tool => {

        sidebar.innerHTML += `
            <div class="tool-item" onclick="openTool('${tool.id}')">
                ${tool.icon} ${tool.name}
            </div>
        `;

    });

}

function openTool(id){

    const tool = tools.find(t=>t.id===id);

    document.getElementById("toolTitle").innerHTML = tool.name;

    document.getElementById("toolCategory").innerHTML = tool.category;

    document.getElementById("toolForm").innerHTML = `
        <label>Masukkan Topik</label>

        <input
            id="prompt"
            placeholder="Contoh: AI Marketing"
        >

        <button onclick="generate()">
            Generate
        </button>
    `;

}

function generate(){
alert("Generate jalan")
    const text = document.getElementById("prompt").value;

    document.getElementById("result").innerHTML = `
        <h3>Output</h3>

        <hr><br>

        <b>Input :</b>

        <p>${text}</p>

        <br>

        <p>
        Engine Beyondespot AI berhasil berjalan.
        </p>
    `;

}

init();
