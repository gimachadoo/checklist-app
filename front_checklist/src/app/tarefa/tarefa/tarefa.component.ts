import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { TarefasService } from '../services/tarefas.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {


  tarefas: Observable<Tarefa[]>;
  displayedColumns = ['nome', 'prioridade', 'horamarcada', 'status', 'acoes'];


  constructor(private tarefaService: TarefasService) {
    this.tarefas = this.tarefaService.listar();



  }
  ngOnInit(): void {
  }

}
