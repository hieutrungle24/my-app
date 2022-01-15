const Header = {
    render() {
        return /* html */ `<nav class="max-w-5xl mx-auto bg-orange-500">
            <ul class="flex">
                <li><a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Trang chủ</a></li>
                <li><a href="/about" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Tuyển sinh</a></li>
                <li><a href="/product" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Chương trình đào tạo</a></li>
                <li> <a href="/signup" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Sign up</a> </li>
                <li> <a href="/signin" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Sign in</a> </li>
                <li> <a href="/admin/dashboard" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Admin</a> </li>
                <input type="search" class=" flex justify-end px-1 py-1 my-2 mr-5 mx-auto" placeholder="Tìm kiếm....">
                <button class="border bg-blue-800 text-amber-50  my-2 ml-5 mx-auto hover:shadow-lg hover:border-pink-500 ">Tìm kiếm</button>
            </ul>
        </nav>`;
    },
};
export default Header;