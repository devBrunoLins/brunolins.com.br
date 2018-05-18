import { DashboardService } from './dashboard/dashboard.service';
import { LinsHubService } from './lins-hub-service/hub.service';
import { RegisterUserService } from './user/user';
import { ActivityHistoryService } from './activity-history/history';


export default class Services {
    public static providers = [
        LinsHubService,
        DashboardService,
        RegisterUserService,
        ActivityHistoryService
    ];
};
