import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-badge',
  templateUrl: './linkedin-badge.component.html',
  styleUrls: ['./linkedin-badge.component.css']
})
export class LinkedinBadgeComponent implements OnInit {

  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
  

}
