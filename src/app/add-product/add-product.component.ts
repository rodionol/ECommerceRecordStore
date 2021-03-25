import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public msg: string;
  public submitted: boolean = false;
  // public product : Product = {
  //   id:null,
  //   productDescriptionEnglish:null,
  //   productDescriptionFrench:null,
  //   brandNameEnglish:null,
  //   brandNameFrench:null,
  //   productType:null,
  //   additionalProductIdentification:null,
  //   targetMarket:null,
  //   productImageUrl:null,
  //   status:null 
  // };
  public prodId: number;
  clearBtnClicked: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit() {
  }

  clearForm(myForm: NgForm) {
    this.clearBtnClicked = true;
    myForm.resetForm();
    this.msg = "Form is cleared.";
  }

  onSubmit(myForm: NgForm) {
    this.clearBtnClicked = false;
    this.submitted = true;
    if (myForm.valid) {
      if (confirm('You are about to submit this entry.\n Are you sure?')) {
        this.productService.create(myForm.value);
        this.msg = "Submission successful";
        this.submitted = false;
        myForm.reset();
      }
    } else {
      this.msg = "Entry is not completed.";
    }

  }

}
