import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-report-preview-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Pré-visualização do Relatório</h2>
    <div mat-dialog-content>
      <p>Aqui você veria o PDF renderizado, ou gráficos robustos gerados pelo JasperReports.</p>
      <p>Tipo de Relatório: <strong>{{ data.reportType }}</strong></p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Fechar</button>
      <button mat-raised-button color="primary" (click)="exportFinal()">Exportar PDF</button>
    </div>
  `
})
export class ReportPreviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) {}

  exportFinal() {
    this.snackBar.open('Relatório sendo gerado em PDF...', 'OK', { duration: 3000 });
  }
}

@Component({
  selector: 'app-report-exporter',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  templateUrl: './report-exporter.component.html',
  styleUrls: ['./report-exporter.component.scss']
})
export class ReportExporterComponent {
  
  @Input() reportType: string = 'Relatório Padrão'; 

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  openPreview(): void {
    this.dialog.open(ReportPreviewDialogComponent, {
      width: '600px',
      data: { reportType: this.reportType }
    });
  }

  exportDirect(): void {
    this.snackBar.open(`Iniciando exportação direta de ${this.reportType}...`, 'FECHAR', { duration: 4000 });
    
  }
}
