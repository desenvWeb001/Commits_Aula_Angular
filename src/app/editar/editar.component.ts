import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../interface/cadastro';
import { CadastroServiceService } from '../services/cadastro-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent{

  cadastro: Cadastro = new Cadastro();
  activatedRoute: any;

  constructor(private cadastroservice: CadastroServiceService, public router: Router) { 
    /*
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cadastro.id = id;*/
  }

  atualizaCadastro(cadastro: Cadastro) { 

    this.cadastroservice.update(cadastro);
//.subscribe(() => { this.router.navigateByUrl('/'); },);
      
  }

  onSubmit() {
    this.atualizaCadastro(this.cadastro);
    console.log(this.cadastro);  
  }

}
