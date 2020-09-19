export const DashboardStats = [
  {
    name: "Career",
    icon: '<i class="material-icons">work</i>',
    data: 30,
    text: "Total Job Requests",
    color: "warning",
  },
  {
    name: "Contacts",
    icon: '<i class="material-icons">contact_support</i>',
    data: 13,
    text: "Total contact requests done",
    color: "success",
  },
  {
    name: "Subscribers",
    icon: '<i class="fas fa-newspaper"></i>',
    data: 43,
    text: "Number of users subscribe us",
    color: "info",
  },
  {
    name: "Appointments",
    icon: '<i class="fas fa-stethoscope"></i>',
    data: 25,
    text: "Total appointments from website",
    color: "primary",
  },
];
export const generateDashboard = () => {
  let dashboard_stats = ``;
  DashboardStats.forEach((item) => {
    dashboard_stats += `
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-header card-header-${item.color} card-header-icon">
                        <div class="card-icon">
                        <i class="material-icons">${item.icon}</i>
                        </div>
                        <p class="card-category">${item.name}</p>
                        <h3 class="card-title">${item.data}</h3>
                    </div>
                    <div class="card-footer">
                        <div class="stats">
                            <i class="material-icons text-danger">info</i>
                            <a href="javascript:;">${item.text}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  return dashboard_stats;
};
