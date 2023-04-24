import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) { }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  scienceFrictionMovieResult:any=[];
  thrillerMovieResult:any=[];



  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.scienceFrictionMovie();
    this.thrillerMovie();
  }


  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;

      //this.trendingMovieResult
    });
  }

  //action movie
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      this.actionMovieResult = result.results;
    });
  }

   //adventure movie
   adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieResult = result.results;
    });
  }

   //comedy movie
   comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      this.comedyMovieResult = result.results;
    });
  }

   //documentary movie
   documentaryMovie(){
    this.service.fetchDocumentryMovies().subscribe((result)=>{
      this.documentaryMovieResult = result.results;
    });
  }

   //animation movie
   animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieResult = result.results;
    });
  }

   //science movie
   scienceFrictionMovie(){
    this.service.fetchScienceFrictionMovies().subscribe((result)=>{
      this.scienceFrictionMovieResult = result.results;
    });
  }

   //thriller movie
   thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      this.thrillerMovieResult = result.results;
    });
  }
}
