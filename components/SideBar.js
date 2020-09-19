export const SideItems = [
  {
    name: "Dashboard",
    icon: '<i class="material-icons">dashboard</i>',
    url: "index.html",
  },
  {
    name: "Appointments",
    icon: '<i class="material-icons">medical_services</i>',
    url: "appointments.html",
  },
  {
    name: "Contacts",
    icon: '<i class="material-icons">contact_support</i>',
    url: "contacts.html",
  },
  {
    name: "Subscriptions",
    icon: '<i class="material-icons">all_inbox</i>',
    url: "subscriptions.html",
  },
  {
    name: "Career",
    icon: '<i class="material-icons">work_outline</i>',
    url: "career.html",
  },
  {
    name: "Location",
    icon: '<i class="material-icons">location_on</i>',
    url: "location.html",
  },
  {
    name: "Gallery",
    icon: '<i class="material-icons">photo_library</i>',
    url: "gallery.html",
  },
];

/**
 * Utility Function For Filename
 */

export const filename = () => {
  const url = window.location.pathname;
  let filename = url.substring(url.lastIndexOf("/") + 1);
  filename = filename ? filename : "index.html";
  return filename;
};

/**
 * Generate Sidebar HTML
 * */

export const generateSidebar = () => {
  let side_bar_str = ``;
  SideItems.forEach((item) => {
    side_bar_str += `
    <li class="nav-item ${filename() === item.url ? "active" : null}">
      <a class="nav-link" href="${item.url}">
        ${item.icon}
        <p>${item.name}</p>
      </a>
    </li>
    `;
  });
  side_bar_str += `
  <li class="nav-item active-pro ">
    <a class="nav-link" href="#sign_out">
      <i class="material-icons">exit_to_app</i>
      <p>Sign Out</p>
    </a>
  </li>
  `;
  return side_bar_str;
};
