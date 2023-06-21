import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacionService } from './services/notificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto_Notificaciones';
  filterForm!: FormGroup;
  filtrado: boolean = false;
  isLoadingResults = true;
  isLoading = false;
  public proyectos: string[] = ["MANAGER","POSVIRTUAL","MIRED"]; 

  constructor(
    private formBuilder: FormBuilder,
    private apinotificacion: NotificacionService
  ) {}
  
  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      mensaje: [""],
      tituloNot:[""],
      proyecto:[""],
    });
  }
  
  public filtrar() {
    if (this.filterForm.invalid) {
      return;
    }
    this.enviarnotificacion();

  }

  get f() {
    return this.filterForm.controls;
  }


  private enviarnotificacion() {
      
      let model:string[] = [this.filterForm.get("proyecto")!.value,this.filterForm.get("mensaje")!.value,this.filterForm.get("tituloNot")!.value,"LOTE"];
      this.apinotificacion.obtener(model).subscribe((res) =>{
        console.log(res)
      });
    }
  

}
