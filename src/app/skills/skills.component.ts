import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  data = [
    {
      title:"Frontend Development",
      content:"Proficient in Angular, React, HTML, CSS, and JavaScript, with a keen eye for crafting responsive and visually appealing user interfaces."
    },
    {
      title:"CSS Frameworks",
      content:"Experienced in working with Tailwind CSS and CSS, leveraging its utility-first approach to streamline and enhance frontend development."
    },
    {
      title:"Backend Development",
      content:"Skilled in server-side development using Nest.js, with a focus on building scalable and efficient APIs."
    },
    {
      title:"Version Control",
      content:"Experienced in using Git and GitHub for version control, ensuring efficient collaboration and code management."
    },
    {
      title:"Continuous Learning",
      content:"Enthusiastic about staying updated with the latest trends and technologies in the ever-evolving field of web development."
    },
    {
      title:"Team Collaboration",
      content:"Skilled in working collaboratively within cross-functional teams, communicating effectively, and contributing to a positive work environment."
    },
    {
      title:"Project Management",
      content:"Capable of effectively managing tasks, timelines, and priorities to meet project goals and deliverables."
    },
    {
      title:"User-Centric Design",
      content:"Dedicated to creating user-friendly and accessible web applications that prioritize the end-user's experience."
    },{

      title:"Adaptability",
      content:"Quick to adapt to new tools, technologies, and programming languages to meet the demands of diverse projects."
    },
  ]

  ngOnInit(): void {
    
  }

}
