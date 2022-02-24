import NewList from "../components/newsList";

import Header from "../components/header";

const HomePage = {
    async render() {
        return /* html */ `
            <div class="max-w-5xl mx-auto">
            
               
                <div class="news">
                    ${await NewList.render()}
                </div>
                
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;