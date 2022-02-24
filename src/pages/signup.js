import toastr from "toastr";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";

const Signup = {
    render() {
        return /* html */ `
            <form action="" class="login-email" id="formSignup">
                <p class="login-text" style="font-size: 2rem; font-weight: 800; center">Register</p>
                <div class="input-group my-3 mx-5">
                    <input type="text" placeholder="Username" required>
                </div>
                <div class="input-group my-3  mx-5">
                    <input type="email" placeholder="Email" required>
                </div>
                <div class="input-group my-3  mx-5">
                    <input type="password" placeholder="Password" required>
                </div>
                <div class="input-group my-3  mx-5">
                    <input type="password" placeholder="Confirm Password" required>
                </div>
                <div class="input-group my-3  mx-5">
                    <button class=" my-4 shadow-zinc-700">Login</button>
                </div>
                <p class="login-register-text mx-3">Have an account?<a href="/signin">Login Here</a> </p>
            </form>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async(e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    toastr.success("Đăng ký thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signup;