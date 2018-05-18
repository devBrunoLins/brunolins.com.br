import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';


export default class Components {
    public static declarations = [
        HomeComponent,
        RegisterUserComponent,
    ];

    public static exports = [
        HomeComponent,
        RegisterUserComponent,
    ];
};
