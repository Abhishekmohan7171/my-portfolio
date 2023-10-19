import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  section!:any

  paraOne = "Hello there! 👋 I'm Abhishek Mohan , a computer engineering graduate from SRM University with a passion for continuous learning and a deep love for technology. My journey into the world of tech has been an exciting one, largely thanks to my involvement in various tech clubs and communities, where I've had the opportunity to explore and master a wide range of fascinating topics. One of my absolute favourite domains in the tech world is frontend development. The art of crafting beautiful web applications is something that truly ignites my creativity.";

  paraTwo = "Currently, I'm proud to be a part of the talented team at Surfboard Payments, where I serve as a software engineer. In this role, I primarily work with Angular and Nest, harnessing these cutting-edge technologies to build robust and efficient solutions. I believe that the journey of learning never truly ends, and I'm always excited to take on new challenges and expand my skill set. I'm thrilled to be a part of the ever-evolving tech landscape and am constantly seeking new opportunities to contribute, learn, and grow.";

  ngOnInit(): void {
    window.onscroll = (v) => {
      console.log(v.target)
const client = document.querySelector('.sec-2')?.getBoundingClientRect()
console.log(client?.top, window.scrollY)

      document.querySelectorAll('section').forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;


        if(top +400 >= offset){
          sec.classList.add('show-animate')
        }else{
          sec.classList.remove('show-animate')
        }
      })
    }
  }
}

