import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.scss']
})
export class CalendarioComponent {

  currentDate = new Date();
  daysOfMonth: any[] = [];
  disponibilidade: Set<string> = new Set();

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth(); // 0..11

    const firstDayWeek = new Date(year, month, 1).getDay(); // 0..6
    const lastDayCurr = new Date(year, month + 1, 0).getDate(); // último dia do mês atual
    const lastDayPrev = new Date(year, month, 0).getDate(); // último dia do mês anterior

    this.daysOfMonth = [];

    // 1) Preencher com dias do mês anterior (em vez de null)
    // se firstDayWeek = 0 (domingo) então não adiciona
    for (let i = firstDayWeek - 1; i >= 0; i--) {
      const dayNum = lastDayPrev - i;
      const prevDate = new Date(year, month - 1, dayNum);
      this.daysOfMonth.push({
        day: dayNum,
        fullDate: this.formatDate(prevDate.getFullYear(), prevDate.getMonth() + 1, dayNum),
        otherMonth: true
      });
    }

    // 2) Dias do mês atual
    for (let d = 1; d <= lastDayCurr; d++) {
      const dateObj = new Date(year, month, d);
      this.daysOfMonth.push({
        day: d,
        fullDate: this.formatDate(year, month + 1, d),
        otherMonth: false
      });
    }

    // 3) Preencher com dias do próximo mês para completar a grade (múltiplo de 7)
    const totalCells = Math.ceil(this.daysOfMonth.length / 7) * 7;
    const nextMonthDayCount = totalCells - this.daysOfMonth.length;
    for (let i = 1; i <= nextMonthDayCount; i++) {
      const nextDate = new Date(year, month + 1, i);
      this.daysOfMonth.push({
        day: i,
        fullDate: this.formatDate(nextDate.getFullYear(), nextDate.getMonth() + 1, i),
        otherMonth: true
      });
    }
  }

  // formata YYYY-MM-DD com zeros à esquerda
  formatDate(year: number, month: number, day: number) {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }

  toggleDisponibilidade(date: string) {
    if (this.disponibilidade.has(date)) {
      this.disponibilidade.delete(date);
    } else {
      this.disponibilidade.add(date);
    }
  }

  // método chamado no clique de um dia
  onDayClick(item: any) {
    if (!item) return;

    if (item.otherMonth) {
      // navegar para o mês correspondente (se o dia for de mês anterior vai para mês anterior; se próximo, vai para próximo)
      const [y, m, d] = item.fullDate.split('-').map((x: string) => parseInt(x, 10));
      this.currentDate = new Date(y, m - 1, 1);
      this.generateCalendar();
    } else {
      this.toggleDisponibilidade(item.fullDate);
    }
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }

  previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }
}
