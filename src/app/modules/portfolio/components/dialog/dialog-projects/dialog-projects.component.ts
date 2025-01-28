import { Component, Inject, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { IProjects } from '../../../../interface/projects.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private readonly _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly _data: IProjects
  ) {}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    // passa os dados do consturtor ao dialog
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
