import { Component, Input, OnInit } from '@angular/core'
import { IButton } from '../../../models/interfaces/button.interface'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  button: IButton

  constructor() {}

  ngOnInit(): void {}
}
