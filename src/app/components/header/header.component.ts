import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, DropdownModule, LinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  router = inject(Router);
  translateService = inject(TranslateService);

  selectOptions = [
    {
      code: 'es',
      name: 'ES',
      icon: '🇪🇸',
    },
    {
      code: 'en',
      name: 'EN',
      icon: '🇺🇸',
    },
  ];

  changeLanguage(e: DropdownChangeEvent) {
    this.translateService.use(e.value.code);
  }
}
