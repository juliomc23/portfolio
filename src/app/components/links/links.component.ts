import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-links',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {}
