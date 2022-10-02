import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/room-article.component';
import { RoomContentComponent } from './content/room-content.component';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';

@NgModule({
  declarations: [
    RoomComponent,
    RoomContentComponent,
    ArticleComponent,
  ],
  imports: [
    MatCardModule,
    CommonModule,
    RouterModule,
    RoomRoutingModule
  ],

})
export class RoomModule{ }
