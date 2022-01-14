import data from "../data";

const NewsList = {
        render() {
            return /* html */ `
                <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Tin tức học tập</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                            <p>${post.desc}</p>
                        </div>
                    `).join("")}
                    
                </div>
        
        `;
    },
};
export default NewsList;