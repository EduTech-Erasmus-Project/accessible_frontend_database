import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-aria',
  templateUrl: './ui-aria.component.html',
  styleUrls: ['./ui-aria.component.scss'],
})
export class UiAriaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateTo(path: string) {
    this.router.navigateByUrl('aria/' + path).then((e) => {
      location.reload();
    });

    // console.log(path);
    // this.router.navigate(['/#/aria/'+path]).then(
    //   (e) => {
    //     location.reload();
    //   }
    // );
  }
}
