import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  //Variables globales donde afecta la vista del usuario.
  public cuatrimestre: string;
  public selector: boolean;
  public icon: string;
  public position: string;
  //variables para carga dinamica de materias.
  public info:Observable<Object>;
  public anios:[] ;
  public periodo: Observable<any>;
  public materias;


  //variables pasadas  pasadas por home
  @Input() public carrera: string;
  //funcion de cambiar entre cuatrimestre.

  constructor(private modalController: ModalController, private data: DataService) {
    this.selector = false;
    this.icon = "arrow-redo";
    this.position = "end";
    this.cuatrimestre = "Primer Cuatrimestre";

  }
  public backPage() {
    this.modalController.dismiss({
    });
  }
  ngOnInit() {
    this.info = this.data.getUser();
    this.cargarData();

  }
  cargarData() {
    console.log(this.info);
    this.anios=this.info[0];
    console.log(this.anios);

  }
  selectorCuatrimestre() {
    //afecta a la vista del usuario
    if (this.selector) {
      this.cuatrimestre = "Primer Cuatrimestre";
      this.selector = false;
      this.position = "end";
      this.icon = "arrow-redo";
    } else {
      this.cuatrimestre = "Segundo Cuatrimestre";
      this.selector = true;
      this.position = "start";
      this.icon = "arrow-undo";
    }
  }


}

