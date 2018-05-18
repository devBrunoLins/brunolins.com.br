import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../services/user/user'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IUser } from '../../models/user/user';
import { ActivityHistoryService } from '../../services/activity-history/history';
import { IActivityHistory, ActivityHistory } from '../../models/activity-history/history'
import { LinsHubService } from '../../services/lins-hub-service/hub.service';


@Component({
    selector: 'register-user',
    templateUrl: 'register-user.component.html'
})

export class RegisterUserComponent implements OnInit {
    private formUser: FormGroup;
    public history: IActivityHistory = new ActivityHistory();
    private action: string = 'registrou um usuário';
    constructor(
        private formBuilder: FormBuilder,
        // private activityHistory: ActivityHistoryService,
        private registerUserservice: RegisterUserService,
        private hubService: LinsHubService
    ) {}

    private initFormGroup() {
        // if (!this.formUser) {
            this.formUser = this.formBuilder.group({
                'firstName': ['', [<any>Validators.required]],
                'lastName': ['', [<any>Validators.required]],
                'email': ['', [<any>Validators.required]],
                'password': ['', [<any>Validators.required]],
                // 'swiftCode': ['', Validators.compose([Validators.required, Validators.pattern('([a-zA-Z]){6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?')])],
            });
        // } else {
        //     this.formUser.reset({
        //         firstName: '',
        //         lastName: '',
        //         email: '',
        //         password: ''
        //     });
        // };
        this.formUser.markAsPristine();
    }

    ngOnInit() {
        this.initFormGroup();
    }

    public registerUser(user: any){
        console.log(user);
        // let registry: IActivityHistory = this.makeJsonHistory(user, this.action);
        // this.activityHistory.setHistory(registry);
        // this.registerUserservice.setUser(user)
        //     .subscribe(
        //         (data) => {
        //             if (data) {
        //                 console.log(data);
        //             }
        //         },
        //         (err) => {
        //             this.hubService.errorCallBack();
        //             console.log(err)
        //         }
        //     )
    }

    public makeJsonHistory(actor: IUser, action: string, date: string = new Date().toString()){
        this.history.action = action;
        this.history.actor = actor.firstName + ' ' +  actor.lastName;

        return this.history;
    }
}