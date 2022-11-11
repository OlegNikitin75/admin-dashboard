import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  isActiveSection = false
  isNotification = true
  isMessages = true
  isAuth = false

  isVisibleFormLogin = false
  isVisibleFormReg = false
  isVisibleMessage = false

  handleClick() {
    this.isVisibleFormLogin = !this.isVisibleFormLogin
  }

  handleClickReg(event) {
    event.preventDefault()
    this.isVisibleFormLogin = false
    this.isVisibleFormReg = true
  }

  handleContinueReg(event) {
    event.preventDefault()
    this.isVisibleFormReg = false
    this.isVisibleMessage = true
  }

  handleClickLogin(event) {
    event.preventDefault()
    this.isVisibleMessage = false
    this.isVisibleFormLogin = true
  }

  ngOnInit(): void {}
}
