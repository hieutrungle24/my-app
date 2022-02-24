import { getAll } from "../../api/posts";

const AdminPosts = {
        async render() {
            const response = await getAll();
            return `
            <div class="max-w-5xl mx-auto">
                
                <div class="news">
                    <table>
                    <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div class="lg:flex lg:items-center lg:justify-between">
                            <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Quản lý tin tức
                            </h2>
                            </div>
                            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                            <a href="/admin/news/add" class="sm:ml-3">
                                <button type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm mới
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <div class="flex flex-col">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                              </th>
                              <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                              </th>
                            
                            </tr>
                          </thead>
                          <tbody>
                            ${response.data.map((post, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>
                                        <img src="${post.img}" alt="" width="50"/>
                                    </td>
                                    <td>
                                        <h3 class="my-3"><a href="" class="btn  rounded">${post.title}</a></h3>
                                    </td>
                                    <td>
                                        <a href="/admin/posts/${post.id}/edit">Edit</a>
                                       
                                        <button data-id="${post.id}" class="btn ">XÓA</button>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  
              </div>
            </main>
                        
                    </table>
                    
                </div>
            </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    axios.delete(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`);
                }
            });
        });
    },
};
export default AdminPosts;