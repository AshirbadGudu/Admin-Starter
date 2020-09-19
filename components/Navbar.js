export const generateNavbar = (PageName, WebsiteURL) => {
  return `
        <div class="container-fluid">
            <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:;">${PageName}</a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="material-icons">person</i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">                  
                    <a class="dropdown-item" href="${WebsiteURL}" target="_blank">Visit Website</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Sign out</a>
                </div>
                </li>
            </ul>
            </div>
        </div>
    `;
};
