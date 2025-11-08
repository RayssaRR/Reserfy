import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from '../../menu/user/nav.component/nav.component';
import { PerfilComponent } from '../../menu/user/perfil.component/perfil.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PerfilComponent, NavComponent, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() nameLabel!: string;
  @Input() usernameLabel!: string;
}
