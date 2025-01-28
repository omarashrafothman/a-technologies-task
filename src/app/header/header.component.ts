import { Component, EventEmitter, Output } from '@angular/core';
import { MainBtnComponent } from '../main-btn/main-btn.component';

@Component({
  selector: 'app-header',
  imports: [MainBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  moreImagePath = "../../assets/icons/more.png";
  isMenuOpen: boolean = false;

  // @Output() countryChange = new EventEmitter<string>();
  // onCountrySelect(event: Event) {
  //   const selectedCountry = (event.target as HTMLSelectElement).value;
  //   this.countryChange.emit(selectedCountry);
  // }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu is now:', this.isMenuOpen ? 'Open' : 'Closed');

  }
}
