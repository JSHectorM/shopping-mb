import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {faBars} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  faBars = faBars;
  isLoginPage: boolean = false;
  isMobile: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url.includes('/login');
        console.log(this.isLoginPage)
      }
    });
  }

  ngOnInit(): void {
    this.checkScreenSize();
    window.onresize = () => this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 990;
  }
}
