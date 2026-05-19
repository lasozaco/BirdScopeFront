import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: false,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() customClass: string = '';

  get classes(): string {
    const base = "px-6 py-3 font-medium rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all";
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:opacity-90",
      secondary: "bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:opacity-90",
      outline: "border-2 border-primary text-primary hover:bg-primary/5",
    };
    
    return `${base} ${variants[this.variant]} ${this.customClass}`;
  }
}
