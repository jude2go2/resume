import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetlifyFormsService } from 'src/app/services/netlify-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private netlifyForm: NetlifyFormsService) {}

  ngOnInit(): void {}

  public onSubmitForm(formdata: NgForm) {
    if (formdata.valid) {
      this.netlifyForm.submitForm(formdata.value);
    }
  }
}
