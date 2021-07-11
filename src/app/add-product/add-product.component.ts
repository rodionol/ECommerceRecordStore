import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public msg: string;
  public submitted: boolean = false;
  @ViewChild('fileUpload', {static: false}) fileUpload:ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit() {
  }

  clearForm(myForm: NgForm) {
    myForm.reset();
  }

  onSubmit(myForm: NgForm) {
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

  onFileSelected(event) {
    console.log('onfileselected fired');
    const file:File = event.target.files[0];
    console.log(file);
    console.log(this.fileUpload);
    // if (file) {

    //     this.fileName = file.name;

    //     const formData = new FormData();

    //     formData.append("thumbnail", file);

    //     const upload$ = this.http.post("/api/thumbnail-upload", formData);

    //     upload$.subscribe();
    // }
}

}
