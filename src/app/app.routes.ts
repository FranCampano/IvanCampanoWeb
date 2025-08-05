import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'logros', component: AchievementsComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'contacto', component: ContactFormComponent },
];
