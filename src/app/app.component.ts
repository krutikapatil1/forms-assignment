import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  defaultSelect: string = "advanced";
  @ViewChild("f", { static: false }) signUpForm: NgForm;
  submitted: boolean = false;
  user = {
    email: "",
    password: "",
    subscription: ""
  };

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.password = this.signUpForm.value.userData.password;
    this.user.subscription = this.signUpForm.value.userData.subscriptionType;
    console.log("Your Details: ");
    console.log("Email: " + this.user.email);
    console.log("Password: " + this.user.password);
    console.log("Subscription Type: " + this.user.subscription);
    this.signUpForm.reset();
  }
}
