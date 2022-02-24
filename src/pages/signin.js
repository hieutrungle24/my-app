import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return /* html */ `
        <form action="" class="login-email" id="formSignin">
            <p class="login-text" style="font-size: 2rem; font-weight: 800; ">Login</p>
            <div class="input-group my-5  mx-5">
                <input type="email" placeholder="Email" required>
            </div>
            <div class="input-group my-5  mx-5">
                <input type="password" placeholder="Password" required>
            </div>
            <div class="input-group mx-5">
                <button class="my-4">Login</button>
            </div>
            <p class="login-register-text mx-3">Don't have an account?<a href="/signup">Register Here</a> </p>
        </form>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async(e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    console.log(data.user);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signin;