import { Component, Input, OnInit } from '@angular/core'
import { IField } from '../../../models/interfaces/field.interface'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input()
  field: IField

  constructor() {}

  ngOnInit(): void {}
}
