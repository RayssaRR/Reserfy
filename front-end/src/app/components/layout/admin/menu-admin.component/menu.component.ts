import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PerfilAdminComponent } from '../../../menu/admin/perfil-admin.component/perfil.component';
import { NavAdminComponent } from '../../../menu/admin/nav-admin.component/nav.component';


@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [PerfilAdminComponent, NavAdminComponent, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuAdminComponent {
  @Input() nameLabel!: string;
  @Input() usernameLabel!: string;
}
