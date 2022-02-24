import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import { add } from "../../api/posts";

const AdminAddPosts = {
    async render() {
        return `
            <div class="max-w-5xl mx-auto">
                
                <div class="news">
                    <form id="formAddPost">
                        <input type="text" class="border border-black" id="title-post" name="title-post" placeholder="Title Post"/><br />
                        <input type="file" class="border border-black" id="img-post" /> <br />
                        <img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/>
                        <textarea name="" class="border border-black" id="desc-post" cols="30" rows="10"></textarea> <br />
                        <button class="bg-blue-500 inline-block px-3 py-4">Add post</button>
                    </form>
                </div>
            </div>
        `;
    },
    afterRender() {
        const formAddPost = $("#formAddPost");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        const imgLink = "";

        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAddPost.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5,
                },
            },
            messages: {
                "title-post": {
                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 5 ký tự",
                },
            },
            submitHandler: () => {
                async function handleAddPost() {
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

                    add({
                        title: document.querySelector("#title-post").value,
                        img: imgLink || "",
                        desc: document.querySelector("#desc-post").value,
                    });
                }
                handleAddPost();
            },
        });
    },
};
export default AdminAddPosts;