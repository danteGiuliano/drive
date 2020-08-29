import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController,private modalCtrl :ModalController) {}
  
  /*estructura de control para comunicarse usando rutas de navController
   y promesas mediante un modal. */
  
  public control(ruta: string) {
    //angular, y sus asquerosas formas de llamar paginas...
    this.navCtrl.navigateForward(ruta);
  }
  //Disparador para una pagina dinamica.
  async menu(nombre:string) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      //dentro del componentProps se envian todos los datos al menu modal.
      componentProps: {
        carrera:nombre
      }
    });
    modal.animated=false;
    await modal.present();
  }

}
