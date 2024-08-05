import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cadastro } from '../interface/cadastro';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroServiceService } from 'src/app/services/cadastro-service.service';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  
  cadastro: Cadastro = new Cadastro();  
  cadastro1: Cadastro[];
  cadastro2: Cadastro;
  route: Route;
 
  constructor(private cadastroservice: CadastroServiceService, private router: Router, route: ActivatedRoute) { }  

  addCadastro(cadastro: Cadastro) { 

    this.cadastroservice.addCadastro(cadastro)
      .subscribe(() => { this.router.navigateByUrl('/'); },);
      
  }
  
  getCadastro() {
    this.cadastroservice.getCadastro().subscribe((cadastro2: Cadastro[]) => {
      this.cadastro1 = cadastro2;
    });
  }
  
  onSubmit() {
    this.addCadastro(this.cadastro);
    console.log(this.cadastro);  
  }


  cleanForm(form: NgForm) {  
      form.resetForm();     
  }
}

