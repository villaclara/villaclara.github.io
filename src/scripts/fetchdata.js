document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsDiv");

    window.projects.forEach(product => {
        const div = document.createElement("div");

        // actually the only width are the affected. as changing height has no effect at all. 
        // is has probably something to do with img tag but for now it look okay
        const imgW = product.img_album_orientation == true ? "w-40" : "w-22";
        const imgH = product.img_album_orientation == true ? "h-24" : "h-40";
        div.innerHTML = `
            <a href="${product.link}" target="_blank">
                <div class="flex flex-col lg:flex-row space-x-3 border border-slate-900 p-4 rounded-xl [&:not(:hover)]:group-hover:opacity-50
                 hover:bg-gray-800 hover:blur-0 hover:scale-105 transition duration-200 transform">
                <img src="${product.image}" class="${imgW} ${imgH} flex-shrink-0" />
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
