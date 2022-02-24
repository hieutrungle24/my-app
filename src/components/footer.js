const Footer = {
    render() {
        return /* html */ `
        <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3 footer-col">
                        <div class="footer_detail">
                           
                            <div class="footer_social">
                                <a href="">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="footer-info">
                    <p>
                        &copy; <span id="displayYear"></span> Copyright by
                        <a href="https://html.design/">Hieult13805</a>
                    </p>
                </div>
            </div>
        `;
    },
};
export default Footer;