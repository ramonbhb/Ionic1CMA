import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public actionSheetControler: ActionSheetController) {}

  async apresentarActionSheet() {
    const actionSheet = await this.actionSheetControler.create({
      header: 'Opções',
      cssClass: 'classe',
      buttons: [
        {
          text: "Editar",
          icon: "pencil",
          handler: () => {
            alert("Clicado");
          }
        },
        {
          text: "Apagar",
          icon: "trash",
          role: "destructive",
          handler: () => {
            alert("Deletado");
            /* escrever a função de apagar a imagem aqui */
          }
        },
        {
          text: "Cancelar",
          icon: "close",
          role: "cancel",
          handler: () => {
            alert("Cancelado");
          }          
        }]
    })

    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
    console.log("Cancelei e a role é ", role)
  }
}
