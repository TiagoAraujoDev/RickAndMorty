import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FilterInfos } from 'src/app/filter-infos';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
})
export class FilterFormComponent implements OnInit {
  filterForm!: FormGroup;

  @Output()
  notifySubmit = new EventEmitter<FilterInfos>();

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      name: new FormControl(''),
      status: new FormControl(''),
      gender: new FormControl(''),
    });
  }

  handleSubmit() {
    this.notifySubmit.emit(this.filterForm.value);
  }
}
