export const generateFooter = () => {
  return `
<div class="container-fluid">
          <nav class="float-left">
            <ul>
              <li>
                <a href="#">
                  Visit Us
                </a>
              </li>
              <li>
                <a href="#">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#">
                  Privacy & Policies
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            &copy;            
            ${new Date().getFullYear()}        
            Design & Developed by
            <a href="" target="_blank">Developer Details</a>
          </div>
        </div>    
    `;
};
