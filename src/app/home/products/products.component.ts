import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((data) => console.log(data));
  }
}
