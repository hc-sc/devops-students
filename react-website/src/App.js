
function App() {
  return (
    <div>
      <header>
        <div id="wb-bnr" class="container">
          <div class="row">
            <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
              <h2 class="wb-inv">Language selection</h2>
              <ul class="list-inline mrgn-bttm-0">
                <li>
                  <a lang="fr" hreflang="fr" href="#">
                    <span class="hidden-xs">Français</span>
                    <abbr title="Français" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">fr</abbr>
                  </a>
                </li>
              </ul>
            </section>
            <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" resource="#wb-publisher" typeof="GovernmentOrganization">
              <a href="https://www.canada.ca/en.html" property="url">
                <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-en.svg" alt="" property="logo"/><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>
              </a>
              <meta property="areaServed" typeof="Country" content="Canada"/>
              <link property="logo" href="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg"/>
            </div>
            <section id="wb-srch" class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4">
              <h2>Search</h2>
              <form action="#" method="post" name="cse-search-box" role="search">
                <div class="form-group wb-srch-qry">
                  <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>
                  <input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca"/>
                  <datalist id="wb-srch-q-ac">
                  </datalist>
                </div>
                <div class="form-group submit">
                  <button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <nav class="gcweb-menu" typeof="SiteNavigationElement">
          <div class="container">
            <h2 class="wb-inv">Menu</h2>
            <button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button>
            <ul role="menu" aria-orientation="vertical" data-ajax-replace="https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html">
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li>
              <li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li>
              <li role="presentation"><a role="menuitem" href="https://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li>
              <li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li>
            </ul>
          </div>
        </nav>
        <nav id="wb-bc" property="breadcrumb">
          <h2>You are here:</h2>
          <div class="container">
            <ol class="breadcrumb">
              <li><a href="https://www.canada.ca/en.html">Canada.ca</a></li>
            </ol>
          </div>
        </nav>
      </header>
      <main property="mainContentOfPage" class="container" resource="#wb-main" typeof="WebPageElement">
        <h1>Static header and footer - Bootstrap 3 - Update to header to come...</h1>
        <p>Static header and footer on Bootstrap 3 with the mega menu. Web Experience Toolkit (WET) includes reusable components for building and maintaining innovative Web sites that are accessible, usable, and interoperable.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor ligula. Proin in maximus arcu. Nam sit amet dolor ac magna aliquam lacinia non in ante. Nam eu aliquet est, et consectetur est. Sed rhoncus orci sit amet felis imperdiet, at finibus tortor ultrices. Etiam porttitor elementum diam vel auctor. Suspendisse sagittis, urna et blandit placerat, quam neque dignissim ligula, id malesuada sapien enim id erat. Sed sapien turpis, iaculis vitae risus vel, luctus placerat lorem. Nunc egestas nibh a pretium luctus. Pellentesque vitae pretium ante. Nam elementum orci quis quam aliquet, at consequat turpis ullamcorper. Fusce libero risus, dapibus sed lacinia non, porta congue nulla. Sed ac tortor ut erat volutpat sollicitudin. Phasellus condimentum neque a quam posuere condimentum.</p>
        <p>Nulla tempus odio fringilla dui egestas, sed hendrerit nunc tempor. Donec ultricies nulla leo, eget fringilla libero lobortis tristique. Curabitur pellentesque luctus odio, vitae semper ex. Integer posuere sem est, in hendrerit sem cursus ut. Aliquam felis felis, sollicitudin eu tincidunt non, egestas et orci.</p>
        <p><a href="bootstrap-4.html" class="btn btn-primary">Switch to Bootstrap 4 (experimental)</a></p>
      </main>
    </div>
  );
}

export default App;
