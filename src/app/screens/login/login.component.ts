import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { Page } from 'tns-core-modules/ui/page/page';
import { LoginService } from '../../screens/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})


export class LoginComponent implements OnInit {
    form: FormGroup;
    emailControlisValid = true;
    passControlisValid = true;
    @ViewChild('emailEl') emailEl: ElementRef<TextField>;
    @ViewChild('passEl') passEl: ElementRef<TextField>;

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, {updateOn: 'blur', validators: [Validators.required, Validators.email]}),
            pass: new FormControl(null, {updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)]})
        });

        this.form.get('email').statusChanges.subscribe(status => {
            this.emailControlisValid = status === 'VALID';
        });

          this.form.get('pass').statusChanges.subscribe(status => {
            this.passControlisValid = status === 'VALID';
        });
    }

    @Input() hasMenu = true ;

    constructor(private router: RouterExtensions, private page: Page, private auth: LoginService) {
        page.actionBarHidden = true;
    }

    private getSegmentedBarItems = () => {
        let SegmentedBarItem1 = new SegmentedBarItem();
        SegmentedBarItem1.title = "PACIENTE";
        let SegmentedBarItem2 = new SegmentedBarItem();
        SegmentedBarItem2.title = "DENTISTA";
        return [SegmentedBarItem1, SegmentedBarItem2];
    }
    segmentedBarItems: Array<SegmentedBarItem> = this.getSegmentedBarItems();
    selectedBarIndex: number = 0;

    email = "";
    senha = "";

    Login() {
        this.emailEl.nativeElement.focus();
        this.passEl.nativeElement.focus();
        this.passEl.nativeElement.dismissSoftInput();

        if(!this.form.valid){
            return;
        }

        const email = this.form.get('email').value;
        const pass = this.form.get('pass').value;
        this.form.reset();
        this.emailControlisValid = true;
        this.passControlisValid = true;

        if (this.selectedBarIndex == 0) {
            this.auth.login(email, pass).subscribe(res => {
                this.router.navigate(['/paciente'], {transition: {name: 'slideLeft'}});
            }, err => {
                console.log(err);
            });
        } else if (this.selectedBarIndex == 1) {
            this.auth.login(email, pass).subscribe(res => {
                this.router.navigate(['/dentista'], {transition: {name: 'slideRight'}});
            }, err => {
                console.log(err);
            });
        }
    }

    onDone() {
        this.emailEl.nativeElement.focus();
        this.passEl.nativeElement.focus();
        this.passEl.nativeElement.dismissSoftInput();
    }

}
