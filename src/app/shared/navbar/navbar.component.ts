import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarRoute } from './interfaces/navbar-route.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarRoutes: INavbarRoute[] = []

  constructor(
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initNavBar()
    this.takeRoutes()
  }

  private initNavBar() {
    this.navbarRoutes = [
      {
        href: "/home",
        icon: "/assets/navbar/navbar-home-icon.svg",
        iconActive: "/assets/navbar/navbar-home-icon-active.svg",
        isActive: true,
        name: "Home"
      },
      {
        href: "/category",
        icon: "/assets/navbar/navbar-category-icon.svg",
        iconActive: "/assets/navbar/navbar-category-icon-active.svg",
        isActive: false,
        name: "Category"
      },
      {
        href: "#",
        icon: "/assets/navbar/navbar-plus-icon.svg",
        iconActive: "/assets/navbar/navbar-plus-icon-active.svg",
        isActive: false,
        name: "Plus",
        class: "navbar-plus-icon"
      },
      {
        href: "/favorite",
        icon: "/assets/navbar/navbar-favorite-icon.svg",
        iconActive: "/assets/navbar/navbar-favorite-icon-active.svg",
        isActive: false,
        name: "Favorite"
      },
      {
        href: "/account",
        icon: "/assets/navbar/navbar-account-icon.svg",
        iconActive: "/assets/navbar/navbar-account-icon-active.svg",
        isActive: false,
        name: "Account"
      }
    ]
  }

  handleNavbarRouteChange(navbarRouteHref: string) {
    this.inactiveAllNavbarRoutes()
    this.navbarRoutes.forEach(
      (navbarRoute) => navbarRoute.isActive = navbarRoute.href === navbarRouteHref
    )
  }

  private inactiveAllNavbarRoutes() {
    this.navbarRoutes.forEach(navbarRoute => navbarRoute.isActive = false)
  }

  takeRoutes() {
    const urlFullPath = this.router.url

    const urlPaths = urlFullPath.split("/")

    const [, mainPath] = urlPaths

    this.handleNavbarRouteChange(`/${mainPath}`)
  }
}
