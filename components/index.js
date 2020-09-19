/**
 *  To Use Import We have to specify our script tag type="module"
 * */
import { filename, generateSidebar } from "./SideBar.js";
import { generateDashboard } from "./Dashboard.js";
import { generateNavbar } from "./Navbar.js";
import { generateFooter } from "./Footer.js";
document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------------------------------------- */
  /*                            Common For All Files                            */
  /* -------------------------------------------------------------------------- */

  document.querySelector("#sidebar ul").innerHTML = generateSidebar();
  document.querySelector("#navbar").innerHTML = generateNavbar(
    "Dashboard",
    "!#"
  );
  document.querySelector("#footer").innerHTML = generateFooter();

  /* -------------------------------------------------------------------------- */
  /*                                  Home Page                                 */
  /* -------------------------------------------------------------------------- */
  filename() == "index.html"
    ? (document.querySelector(
        "#dashboard_stats .row"
      ).innerHTML = generateDashboard())
    : null;
});
