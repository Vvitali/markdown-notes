import { Component } from '@angular/core';
import * as marked from 'marked';
import * as git from 'git';

@Component({
  selector: 'app-root',
  template: `
    <textarea [(ngModel)]="markdown"></textarea>
    <div [innerHtml]="preview"></div>
    <button (click)="saveToGit()">Save to Git</button>
  `
})
export class AppComponent {
  markdown = '';
  preview = '';

  consructr() {
    thisto.preview = marked(this.markdown);
  }

  saveToGit() {
    git.repository('path/to/repo', (err, repo) => {
      repo.createCommit('HEAD', {
        author: {
          name: 'Your Name',
          email: 'your@email.com'
        },
        committer: {
          name: 'Your Name',
          email: 'your@email.com'
        },
        message: 'Save notes to Git repo',
        tree: repo.createTree(files),
        parents: [repo.getCommit('HEAD').id]
      }, (err, commitId) => {
        console.log('Commit created with ID', commitId);
      });
    });
  }
}

