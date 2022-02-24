import axios from "axios";

import { update, get } from "../../api/posts";

const AdminEditPosts = {
    async render(id) {
        const { data } = await get(id);
        console.log(data);
        return `
            <div class="max-w-5xl mx-auto">
               
                <div class="news">
                    <form id="formEditPost">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title Post" value="${data.title}"/><br />
                        <img src="${data.img}" id="img-preview"/>
                        <input type="file" class="border border-black" id="img-post" /> <br />
                        <textarea name="" class="border border-black" id="desc-post" cols="30" rows="10">${data.desc}</textarea> <br />
                        <button class="bg-blue-500 inline-block px-3 py-4">Add post</button>
                    </form>
                </div>
            </div>
        `;
    },
    afterRender(id) {
        const formEditPost = document.querySelector("#formEditPost");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        const imgLink = "";
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEditPost.addEventListener("submit", async(e) => {
            e.preventDefault();

            const file = document.querySelector("#img-post").files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                // eslint-disable-next-line no-const-assign
                imgLink = data.url;
            }
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminEditPosts;