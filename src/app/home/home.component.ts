import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  tagline = "An enthusiastic Computer Engineer who is committed to learning and self-development, so can consistently achieve better results. "

//   ngOnInit(): void {
//     window.onscroll = (v) => {
//       console.log(v.target)
// const client = document.querySelector('.sec-2')?.getBoundingClientRect()
// console.log(client?.top, window.scrollY)

//       document.querySelectorAll('section').forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;


//         if(top  >= offset){
//           sec.classList.add('show-animate')
//         }else{
//           sec.classList.remove('show-animate')
//         }
//       })
//     }
  // }

}
