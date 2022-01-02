import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { CatNinjaService } from "../../cat-ninja.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private catNinjaService: CatNinjaService
  ) { }

  data: any;
    
  mostrarFAct (){
      this.catNinjaService.getKittens().subscribe(data=>{
        console.log(data);
        this.data=data;
      });
    }

  ngOnInit(): void {
    this.mostrarFAct();
  }

}
