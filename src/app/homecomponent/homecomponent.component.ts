import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from './homeservice.service';
import { movies } from '../../datamodel/movies.model';
@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css'],
})
export class HomecomponentComponent implements OnInit {
  movies: movies[]=[];
  moviename:string;
  data: any;
  image: any;
  constructor(private homeservice: HomeserviceService) {}
  ngOnInit() {
    

    this.homeservice.getPosts().subscribe((result) => {
      this.data = result;
      this.image = this.data.results;
      console.warn('result', result);
    }
    );
    this.movies=this.image;

    
  }
  Search(){
    this.movies=this.movies.filter(res=>{
      return res.original_title.toLocaleLowerCase().match(this.moviename.toLocaleLowerCase());
    });
  }
}

