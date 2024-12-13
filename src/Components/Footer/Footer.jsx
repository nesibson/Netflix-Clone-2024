import React from "react";
import FacebookOutlineIcon from "@mui/icons-material/FacebookOutline";
import YouTubeIcon from "@mui/icons-material/ YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";
export default function Footer()
 {
  return (
    <div classname="footer_outer_container">
      <div classname="footer_inner_container">
        <div classname="footer_icons">
          <FacebookOutlineIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div classname="footer_data">
          <div> 
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms Of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="copy-write">
    &copy; 1997-2004 Netflix,Inc.
        </div>
      </div>
    </div>
  );
}