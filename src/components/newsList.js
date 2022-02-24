import { getAll } from "../api/posts";

const NewList = {
        async render() {
            const response = await getAll();
            return /* html */ `<section class="shop_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Latest Watches
                </h2>
            </div>
            <div class="row">
                    <div class="col-md-6 ">
                        ${response.data.map((post) => `
                            <div class="box">
                                <a href="/news/${post.id}">
                                  <div class="img-box">
                                      <img src="${post.img}" alt="">
                                  </div>
                                  <div class="detail-box">
                                      <h6>
                                        ${post.title}
                                      </h6>
                                      <h6>
                                          Price:
                                          <span>
                                             ${post.price}
                                          </span>
                                      </h6>
                                  </div>
                                  <div class="new">
                                      <span>
                                          Featured
                                      </span>
                                  </div>
                                </a>
                            </div>
                      `)}
                      
                    </div>
                  <div class="col-sm-6 col-xl-3">
                    ${response.data.map((post) => `
                        <div class="box">
                        <a href="/news/${post.id}">
                                <div class="img-box">
                                    <img src="${post.img}" alt="">
                                </div>
                                <div class="detail-box">
                                    <h6>
                                    ${post.title}
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                                        ${post.price}
                                        </span>
                                    </h6>
                                </div>
                                <div class="new">
                                    <span>
                                        New
                                    </span>
                                </div>
                            </a>
                        </div>
                      `)}    
                  </div>
                <div class="col-sm-6 col-xl-3">
                    ${response.data.map((post) => `
                        <div class="box">
                        <a href="/news/${post.id}">
                                <div class="img-box">
                                    <img src="${post.img}" alt="">
                                </div>
                                <div class="detail-box">
                                    <h6>
                                    ${post.title}
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                                        ${post.price}
                                        </span>
                                    </h6>
                                </div>
                                <div class="new">
                                    <span>
                                        New
                                    </span>
                                </div>
                            </a>
                        </div>
                        `)}     
                </div>
               
                
        </div>
    </section>
            `;
    },
};
export default NewList;