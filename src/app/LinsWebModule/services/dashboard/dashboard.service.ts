import { Injectable } from '@angular/core';
import { LinsHubService } from '../lins-hub-service/hub.service';
import { HubConnectorComponent } from 'pack-linsweb/hub-connector-component/hub-connector'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

    constructor(
        private hubConnector: HubConnectorComponent,
        private hubSvc: LinsHubService
    ) { }

    // public getList(): Observable<any> {
    //     return this.hubConnector.get(this.hubSvc.getURL(this.hubSvc.resources.getList))
    //         .map(res => res.json().customer)
    //         .catch(this.hubSvc.handleError);
    // }
}
