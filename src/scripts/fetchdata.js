document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsDiv");

    window.projects.forEach(product => {
        const div = document.createElement("div");

        div.innerHTML = `
            <a href="${product.link}" target="_blank">
                <div class="border border-slate-700 p-4 rounded [&:not(:hover)]:group-hover:opacity-50 hover:bg-gray-800 hover:blur-0">
                <img src="${product.name}"  width=200 height=40 class="flex-shrink-0" />
                <div>
                    <h3 class="text-lg font-semibold text-slate-100">${product.name}</h3>
                    <p class="text-slate-400">${product.description}</p>
                    <span class="text-green-400 text-sm"> ${product.tags.join(", ")}</span>
                </div>
                </div>
            </a>
            `;

        container.appendChild(div);
    });
});
