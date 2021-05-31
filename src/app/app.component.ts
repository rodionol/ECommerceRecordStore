import { staticViewQueryIds } from '@angular/compiler';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vie Record Store';
  @ViewChild('hammenuimg', {static: false}) hammenuimg:ElementRef;
  @ViewChild('mobilemenu', {static: false}) mobilemenu:ElementRef;
  isClosed: boolean = true;

  mobileMenuOpenClose(isClosed: boolean) {
    console.log(this.isClosed);
    if (this.isClosed) {
      this.hammenuimg.nativeElement.setAttribute('src', 'assets/icons/close-icon.svg');
      this.mobilemenu.nativeElement.classList.add('open');
      this.isClosed = false;
    } else {
      this.hammenuimg.nativeElement.setAttribute('src', 'assets/icons/hamburger-menu.svg');
      this.mobilemenu.nativeElement.classList.remove('open');
      this.isClosed = true;
    }
      
  }

}
