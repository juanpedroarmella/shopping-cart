import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList$: Observable<Game[]>;

  constructor(cart: GameCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {}
}
