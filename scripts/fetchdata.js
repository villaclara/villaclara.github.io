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
                <div class="flex flex-col lg:flex-row gap-3 md:p-4 py-4 rounded-md md:[&:not(:hover)]:group-hover:opacity-50
                 md:hover:bg-gray-800 md:hover:blur-0 md:hover:scale-105 transition duration-200 transform">
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
            html += `<span class="self-center text-sky-400 bg-slate-900 text-sm font-semibold border-1 border-sky-300 rounded-full px-2">${item}</span>`
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
