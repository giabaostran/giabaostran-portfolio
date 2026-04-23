import React from "react";
import { bio } from "./script";

export default function Footer() {
  return (
    <footer id="contact">
      <a href={`mailto:${bio.email}`} class="footer-email">
        Best regards
      </a>
      <div class="footer-links">
        <a href={bio.gitHub}>GitHub ↗</a>
        <a href={bio.linkedIn}>LinkedIn ↗</a>
        <a href={`mailto:${bio.email}`}>Email ↗</a>
      </div>
    </footer>
  );
}
