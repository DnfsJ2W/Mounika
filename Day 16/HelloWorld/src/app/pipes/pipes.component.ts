import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  template: `
             
             {{ description | summary }}
              `
})

export class PipesComponent {

  description= `
   The expandable Inspiron Small Desktop has been reimagined to enhance the enjoyment that comes with owning a Dell desktop.

Small and mighty: Revolutionary design saves space without compromising system performance, and features multiple expansion slots for future upgrades.

Easy access: Optical drive, USB 3.1 Gen 1 Type-A ports and 5-in-1 media card reader are all conveniently located up front for easy accessibility.
`
  // constructor() { }

  // ngOnInit(): void {
  // }
  // product ={
  //   title: "Laptop",
  //   rating: 4.9,
  //   price: 55000,
  //   description: "sdfdsfdfs",
  //   mfgdate: new Date(2020,3,1)
  // }


}

