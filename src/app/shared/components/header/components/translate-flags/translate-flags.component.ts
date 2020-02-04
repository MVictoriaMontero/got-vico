import { Component, OnInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translate-flags',
  templateUrl: './translate-flags.component.html',
  styleUrls: ['./translate-flags.component.scss']
})
export class TranslateFlagsComponent implements OnInit {

  constructor(private translate: TranslateService) {
}

  ngOnInit() {
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
