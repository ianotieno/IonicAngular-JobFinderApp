import { Directive, forwardRef, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Directive({
  selector: 'ion-input[formControlName],ion-input[formControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IonInputAccessor),
      multi: true
    }
  ]
})
export class IonInputAccessor implements ControlValueAccessor, OnDestroy {
  @Input()
    formControlName!: string;
  @Input() formControl: any;

  @Output() change = new EventEmitter<any>();

  private innerValue: any = '';

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private ionInput: IonInput) {}

  writeValue(value: any): void {
    this.innerValue = value;
    this.ionInput.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.ionInput.disabled = isDisabled;
  }

  ngOnDestroy() {}
}