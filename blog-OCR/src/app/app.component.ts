import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 0
    );
  });
  posts = [
    {
      titre: 'Premier Post',
      contenu: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
        '  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        '  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
        '  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdAt: this.lastUpdate,
      loveIts: 1
    },
    {
      titre: 'Second Post',
      contenu: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
        '  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
        '  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
        '  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdAt: this.lastUpdate,
      loveIts: -1
    },
    {
      titre: 'Troisième Post',
      contenu: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n' +
  '  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n' +
  '  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
  '  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
  '  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdAt: this.lastUpdate,
      loveIts: 0
    }
  ];
}
