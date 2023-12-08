import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <p-toast position="bottom-center" key="bc"></p-toast>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnDestroy {
  title = 'teste-primeng';

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
