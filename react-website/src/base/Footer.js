
function Footer() {
    return (
        <div>
            <footer id="wb-info">
                <div className="landscape">
                    <nav className="container wb-navcurr">
                        <h2 className="wb-inv">About government</h2>
                        <ul className="list-unstyled colcount-xs-2 colcount-md-3">
                            <li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>
                            <li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li>
                            <li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and military</a></li>
                            <li><a href="https://www.canada.ca/en/news.html">News</a></li>
                            <li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and regulations</a></li>
                            <li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li>
                            <li><a href="https://pm.gc.ca/eng">Prime Minister</a></li>
                            <li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li>
                            <li><a href="https://open.canada.ca/en/">Open government</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="brand">
                    <div className="container">
                        <div className="row">
                            <nav className="col-md-9 col-lg-10 ftr-urlt-lnk">
                                <h2 className="wb-inv">About this site</h2>
                                <ul>
                                    <li><a href="https://www.canada.ca/en/social.html">Social media</a></li>
                                    <li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li>
                                    <li><a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a></li>
                                    <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
                                    <li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>
                                </ul>
                            </nav>
                            <div className="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of Page <span className="glyphicon glyphicon-chevron-up"></span></a> </div>
                            <div className="col-xs-6 col-md-3 col-lg-2 text-right"> <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg" alt="Symbol of the Government of Canada" /> </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;