import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrl: './submodule.component.scss'
})
export class SubmoduleComponent implements OnInit {
  subModuleName: string = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.subModuleName = params['name'].replace(/-/g, " "));
  }
}
