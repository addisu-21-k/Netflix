import React from 'react'
import './Footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
function Footer() {
  return (
   <div className="footer_outer_container">
      <div className="footer_inner_container">
          <div className="footer_icon">
              <FacebookOutlinedIcon/>
              <YouTubeIcon/>
              <InstagramIcon/>
          </div>
           <div className="footer_data">
              <div>
                <ul>
                  <li>Audio Description</li>
                  <li>Invester  Relation </li>
                  <li>Legal Notices</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>Job center</li>
                  <li>Jobs</li>
                  <li>Cookie Preference</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>Gift cards</li>
                  <li>Term of User</li>
                  <li>Corporate Information</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>Media Cneter</li>
                  <li>Privacy</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              <div className="service_code">
                <p>Service code</p>
              </div>
              <div className="copy-writes">
                &copy; 2025 netflix, inc
              </div>
           </div>
          
      </div>
   </div>
  )
}

export default Footer
