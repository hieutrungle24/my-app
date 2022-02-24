import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products/index";
import Header from "./components/header";
import Footer from "./components/footer";
import AdminPosts from "./pages/post";
import AdminAddPosts from "./pages/post/add";
import DetailNewsPage from "./pages/detailNews";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AddNewsPage from "./pages/admin/news/add";
// import NewsEdit from "./pages/admin/news/edit";
import AdminEditPosts from "./pages/post/edit";
import ProductDetailPage from "./pages/products/detail";
import CartPage from "./pages/cart";

const router = new Navigo("/", { linksSelector: "a" });

const print = async(content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
    document.getElementById("footer").innerHTML = Footer.render();
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            console.log("ahihi");
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => print(ProductDetailPage, data.id),

    "/admin/posts": () => print(AdminPosts),
    "/admin/posts/add": () => print(AdminAddPosts),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news/add": () => print(AddNewsPage),
    "/admin/posts/:id/edit": ({ data }) => print(AdminEditPosts, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),

    "/news/:id": ({ data }) => {
        print(DetailNewsPage, data.id);
    },
    // "/admin/dashboard": () => {
    //     print(Dashboard.render());
    // },
    "/admin/news": () => print(AdminNewsPage),
    // "/admin/news/add": () => {
    //     print(AddNewsPage.render());
    // },
    // "/admin/dashboard/edit/:id": ({ data }) => {
    //     const { id } = data;
    //     print(NewsEdit.render(id));
    // },
});
router.resolve();