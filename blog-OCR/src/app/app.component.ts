import {Component} from '@angular/core';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [{
    titre: 'Mon premier post',
    contenu: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
      '  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
      '  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
      '  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
      '  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
    {
      titre: 'Mon deuxième post',
      contenu: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
        '  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        '  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
        '  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      titre: 'Encore un post',
      contenu: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
        '  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        '  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
        '  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  ];
}
