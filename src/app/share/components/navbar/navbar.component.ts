import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {
  faBars,
  faBell,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  // Icons
  faBars = faBars;
  search = faMagnifyingGlass;
  bell = faBell;
  cartShopping = faCartShopping
  location = faLocationDot;
  // IMG Logos
  srcLogo = "/assets/img/LOGO.png"
  // Flags
  isLoginPage: boolean = false;
  isMobile: boolean = false;
  // articleas
  numArticles: number = 0;
  // CP
  envioCP:number = 42010;

  // Rutas
  routeHome ="/home"
  routeLogin ="/login"

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
