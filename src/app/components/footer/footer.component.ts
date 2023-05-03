import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faBlogger,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  faBlogger = faBlogger;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
