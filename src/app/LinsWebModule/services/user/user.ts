import { Injectable } from '@angular/core';
import { LinsHubService } from '../lins-hub-service/hub.service';
import { HubConnectorComponent } from 'pack-linsweb/hub-connector-component/hub-connector'
import { Observable } from 'rxjs/Observable';

import { IUser, User } from '../../models/user/user'

@Injectable()
export class RegisterUserService {

    constructor(
        private hubConnector: HubConnectorComponent,
        private hubSvc: LinsHubService
    ) { }

    public setUser(req: IUser): Observable<any> {
        let filter: IUser = req;
        return this.hubConnector.post(
            this.hubSvc.getURL(this.hubSvc.resources.getUser), filter)
    }

    // public getUser(): Observable<any> {

    //     return this.hubConnector.get(this.hubSvc.getURL(this.hubSvc.resources.getList))
    //         .map(res => res.json().customer)
    //         .catch(this.hubSvc.handleError);
    // }
}
