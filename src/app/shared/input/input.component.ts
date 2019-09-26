import { Component, OnInit, ContentChild, AfterContentInit, Input } from '@angular/core';
import { FormControlName, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any;

  @ContentChild( FormControlName ) control: FormControlName;
  @Input() mensagem;
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      address: this.formBuilder.control('', [Validators.minLength(5), Validators.required]),
      number: this.formBuilder.control('', [Validators.minLength(5), Validators.maxLength(7), Validators.required]),
      complete: this.formBuilder.control('')
    });
  }

  ngAfterContentInit(): void {
    this.input = this.control;
  }

  valido() {
    return this.input.valid;
  }

  invalido() {
    return this.input.invalid;
  }

}
