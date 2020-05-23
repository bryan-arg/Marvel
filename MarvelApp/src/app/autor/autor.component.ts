import { Component, OnInit } from '@angular/core';
import { SeverAPIService } from '../services/sever-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  constructor(private api: SeverAPIService, private router: Router) { }
  ncomprador='';
  superH: any[] =[];
  superH2: any []=[];
  superH3: any []=[];
  superH4: any []=[];
  creators:Object;
  n:Object[]=[];
 item: any []=[];
 it='';


  ngOnInit(): void {
  }

  

  
obtenerapi(){
  this.api.getMarvelAutor().subscribe(data=>{
     
    this.superH = data['data'];
    this.superH2 = this.superH['results'];
    
    console.log(data);
    for(let i in this.superH2){
      
  
      this.n[i]= this.superH2[i];
      console.log('hey'+this.n[i]);
      this.superH3=this.n['comics'];
  
      console.log(this.superH3);
    }
  });
}

  

}
