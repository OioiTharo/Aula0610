import { Component } from '@angular/core';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/Task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  constructor(public dialog: MatDialog) { }
  tarefas: Task[] = [
    new Task({
      name: "Estudar Angular",
      descricao: "Preciso estudar angular..."
    })
  ]
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.tarefas.push(res);
      }
    })
  }
  get totalDeTarefas(): number {
    return this.tarefas.length
  }

  get totalDePendentes(): number{
    return this.tarefas.filter(tarefa=>tarefa.situacao === "Pendente").length
  }

  get totalDeFazendo(): number{
    return this.tarefas.filter(tarefa=>tarefa.situacao === "Fazendo").length
  }

  get  totalDeConcluidos(): number{
    return this.tarefas.filter(tarefa=>tarefa.situacao === "Concluido").length
  }
 

  alterarSituacao(tarefa: Task, situacao: string): void{
    tarefa.situacao = situacao
  }
}