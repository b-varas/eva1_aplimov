import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,
  IonLabel, IonInput, IonTextarea, IonButton, IonButtons, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trash, create } from 'ionicons/icons';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonButtons, IonIcon,
  ],
})
export class HomePage {
  tareas: Tarea[] = [];
  titulo = '';
  descripcion = '';
  editandoId: number | null = null;
  private siguienteId = 1;

  constructor() {
    addIcons({ trash, create });
  }

  guardar() {
    if (!this.titulo.trim()) return;

    if (this.editandoId !== null) {
      const t = this.tareas.find((x) => x.id === this.editandoId);
      if (t) {
        t.titulo = this.titulo;
        t.descripcion = this.descripcion;
      }
      this.editandoId = null;
    } else {
      this.tareas.push({
        id: this.siguienteId++,
        titulo: this.titulo,
        descripcion: this.descripcion,
      });
    }
    this.limpiar();
  }

  editar(t: Tarea) {
    this.editandoId = t.id;
    this.titulo = t.titulo;
    this.descripcion = t.descripcion;
  }

  eliminar(id: number) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
    if (this.editandoId === id) {
      this.editandoId = null;
      this.limpiar();
    }
  }

  private limpiar() {
    this.titulo = '';
    this.descripcion = '';
  }
}
