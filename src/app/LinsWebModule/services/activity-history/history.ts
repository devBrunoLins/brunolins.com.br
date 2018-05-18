import { Injectable } from '@angular/core';
import { LinsHubService } from '../lins-hub-service/hub.service';
import { HubConnectorComponent } from 'pack-linsweb/hub-connector-component/hub-connector'
import { Observable } from 'rxjs/Observable';
import { IActivityHistory } from '../../models/activity-history/history';

@Injectable()
export class ActivityHistoryService {

    constructor(
        private hubConnector: HubConnectorComponent,
        private hubSvc: LinsHubService
    ) { }

    public setHistory(val: IActivityHistory){
        return this.hubConnector.post(
            this.hubSvc.getURL(this.hubSvc.resources.setHistoryActivity), val)
    }
    
    public getHistory(): Observable<IActivityHistory>{
        return this.hubConnector.get(this.hubSvc.getURL(this.hubSvc.resources.getHistoryActivity))
            .map(res => res.json().customer)
            .catch(this.hubSvc.handleError);
    }
}
