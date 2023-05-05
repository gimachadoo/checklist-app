import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TarefaRoutingModule } from './tarefa-routing.module';
import { TarefaComponent } from './tarefa/tarefa.component';




@NgModule({
  declarations: [
    TarefaComponent
  ],
  imports: [
    CommonModule,
    TarefaRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TarefaModule { }
