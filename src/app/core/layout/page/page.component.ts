import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../menu/shared/modules.service';
import { Module } from '../menu/shared/module';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  providers: [AlertService],
})
export class PageComponent implements OnInit {
  public modules!: Module[];

  constructor(
    private modulesService: ModulesService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.getModules();
  }

  getModules(): void {
    this.modulesService.getModules().subscribe({
      next: (res) => {
        this.modules = res.body;
      },
      error: (error) => {
        this.alertService.error(error);
      },
    });
  }
}
