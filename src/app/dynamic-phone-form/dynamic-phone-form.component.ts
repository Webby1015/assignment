import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-phone-form',
  templateUrl: './dynamic-phone-form.component.html',
  styleUrls: ['./dynamic-phone-form.component.css']
})
export class DynamicPhoneFormComponent {
  phoneNumbers: string[] = ['']; // Initial input field
  
  addPhoneNumber() {
    this.phoneNumbers.push('');
  }
  
  removePhoneNumber(index: number) {
    this.phoneNumbers.splice(index, 1);
  }
  
  submitForm() {
    const phoneObjects = this.phoneNumbers.map((phoneNumber, index) => ({
      ['phoneNumber' + (index + 1)]: phoneNumber
    }));
    console.log(phoneObjects);
  }
}
