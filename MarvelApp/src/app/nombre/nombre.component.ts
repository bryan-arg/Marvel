import { Component, OnInit } from '@angular/core';
import { SeverAPIService } from '../services/sever-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  title = 'MarvelApp'
  ncomprador='';
  superH: any[] =[];
  superH2: any []=[];
  superH3: any []=[];
  superH4: any []=[];
  constructor(private api: SeverAPIService, private router: Router) { }

  ngOnInit(): void {
  }




  
obtenerapi(){
  this.api.getMarvel().subscribe(data=>{
     
    this.superH = data['data'];
    this.superH2 = this.superH['results'];
    this.superH3= this.superH2['data'];
    
    
    console.log(this.superH2);

    console.log(this.superH3);
   

  });

  

  }

  


  New_login(){
    this.router.navigate(['/login']);
  }
}
