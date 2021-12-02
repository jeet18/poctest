import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      tapToDismiss: false,
      enableHtml: true,
      timeOut: 5000,
    }),
  
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule,
   
  ],
  providers: [],
})
export class SharedCommonModule { }
