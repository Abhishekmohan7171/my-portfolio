import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  works = [
    {
      title:"Developer Portal",
      image:"assets/images/devp.png",
      description:"This is the project our team is working on in our company. This is made for our customers to get a clear idea of our product and how to use it."
    },
    {
      title:"Foodie App",
      image:'assets/images/online-order.png',
      description:"A web app where the customer can order their food from the menu and the admin can check it and serve them."
    },
    {
      title:"Parkinsons Detection using ML",
      image:'assets/images/disease.png',
      description:"This show the probability of getting parkinsons who had certain symptoms , as per the dataset."
    }
  ]

}
