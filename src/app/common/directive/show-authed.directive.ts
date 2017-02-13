
import {Directive, OnInit, ViewContainerRef, TemplateRef, Input} from "@angular/core";
import {UserService} from '../service/user.service';

@Directive({selector:'[showAuthed]'})
export class  ShowAuthedDirective implements  OnInit{
  condition:boolean;

  constructor(private userService:UserService,
              private viewContainer:ViewContainerRef,
              private templateRef: TemplateRef<any>
  ){}

  ngOnInit():void{
     this.userService.isAuthenticated.subscribe(
       (isAuthenticated)=>{
         console.log(isAuthenticated);
         if(isAuthenticated && this.condition || !isAuthenticated && !this.condition){
           this.viewContainer.createEmbeddedView(this.templateRef);
         }
         else {
           this.viewContainer.clear();
         }
       }
     );
  }

  @Input() set showAuthed(condition:boolean){
    this.condition = condition;
  }

}
