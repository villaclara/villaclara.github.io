document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsDiv");

    window.projects.forEach(product => {
        const div = document.createElement("div");

        // actually the only width are the affected. as changing height has no effect at all. 
        // is has probably something to do with img tag but for now it look okay
        const imgW = product.img_album_orientation == true ? "w-40" : "md:w-22 w-20";
        const imgH = product.img_album_orientation == true ? "h-24" : "h-40";
        let html = `
            <a href="${product.link}" target="_blank">
                <div class="flex flex-col lg:flex-row space-x-3 border border-slate-900 p-4 rounded-md [&:not(:hover)]:group-hover:opacity-50
                 hover:bg-gray-800 hover:blur-0 hover:scale-105 transition duration-200 transform">
                <div class="flex items-center">
                    <img src="${product.image}" class="${imgW} ${imgH} flex-shrink-0" />
                </div>
                <div class="space-y-3">
                    <h3 class="text-base font-semibold text-slate-100">${product.name}</h3>
                    <p class="text-slate-400 text-sm text-justify">${product.description}</p>
                    <div class="flex flex-wrap gap-2">
            `;

        product.tags.forEach(item => 
        {
            html += `<span class="text-sky-400 bg-slate-900 text-sm font-semibold border-1 border-sky-300 rounded-full px-2">${item}</span>`
        });

        html += `</div>
                    </div>
                </div>
            </a>
            `;
        div.innerHTML = html;
        container.appendChild(div);
    });
});
