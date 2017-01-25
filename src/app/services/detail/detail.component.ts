import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-services',
  template: `
    <div>
      Showing product details for product: {{id}}
    </div>
  `,
})

export class DetailComponent {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      console.log(this.id);
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
