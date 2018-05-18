import { Injectable } from '@angular/core';
import { apiResources } from './endpoints';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
// import { ModalService } from '../../../shared/services/modal/modal.service';
// import { ModalError } from '../../../shared/models/modal/modal-error';
import Configuration from '../../../../../configuration';
// import { IntegrationIbpjService } from '../../../shared/services/integration-ibpj/integration-ibpj.service';

@Injectable()
export class LinsHubService {
    private local: boolean = Configuration.local;
    private production: boolean = Configuration.production;

    private urlAmbiente: string = this.production ? 'https://enderecoDaApiEmProducao' : 'https://enderecoDaApiEmDev';
    private url = !this.local ? this.urlAmbiente : 'http://localhost:3000';
    
    private appKey: string = '9de23020921101341b2f005056906329';

    constructor(
        // public modalService: ModalService,
        // private integrationIbpjService: IntegrationIbpjService
    ) {}

    public resources = {
        getUser: 'linswebapi.getUser',
        getHistoryActivity: 'linswebapi.getHistoryActivity',
        setHistoryActivity: 'linswebapi.setHistoryActivity'
    };

    public getURL(endpoint: string, params?: Array<any>): string {
        let path: Array<string> = endpoint.split('.');
        let endpointString: Function;

        if (params)
            endpointString = (): string => `${apiResources.rest[path[0]].endpointBase}${apiResources.rest[path[0]].resources[path[1]](params)}`;
        else
            endpointString = (): string => `${apiResources.rest[path[0]].endpointBase}${apiResources.rest[path[0]].resources[path[1]]}`;

        return `${this.url}${endpointString()}?gw-app-key=${(this.appKey)}`;
    }

    public getBody(res): any {
        let response;

        if (typeof res.json === 'function') {
            response = res.json();
            if (response.data) {
                return response.data;
            } else {
                return response;
            }
        } else {
            return res.error.json();
        }
    }

    public handleError(error: any): any {
        return Observable.throw(error);
    }

    public replacer(str) {
        return str.replace(/(&quot;)|(&amp;)/gi, '').replace(/(quot;)|(amp;)/gi, '').replace(/(null)/gi, '-');
    }

    public replaceSlash(str) {
        return str.replace(/(\/)|(\/\/)/gi, '');
    }

    // public errorCallBack() {
    //     this.modalService.openModal(new ModalError('requests.error-modal.message', 'requests.error-modal.title', true));
    // }

    public imperativeHandleError(error: any): any {
        return Observable.throw(error);
    }

    // public imperativeErrorCallback() {
    //     this.modalService.openModal(new ModalError('requests.error-modal.imperative-message', 'requests.error-modal.imperative-title', true));
    // }

    public convertXMLToJson(xml) {
        // Create the return object
        let obj = {};

        if (xml.nodeType === 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj['@attributes'] = {};
                for (let j = 0; j < xml.attributes.length; j += 1) {
                    const attribute = xml.attributes.item(j);
                    obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType === 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        // If just one text node inside
        if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
            obj = xml.childNodes[0].nodeValue;
        } else if (xml.hasChildNodes()) {
            for (let i = 0; i < xml.childNodes.length; i += 1) {
                const item = xml.childNodes.item(i);
                const nodeName = item.nodeName;
                if (typeof (obj[nodeName]) === 'undefined') {
                    obj[nodeName] = this.convertXMLToJson(item);
                } else {
                    if (typeof (obj[nodeName].push) === 'undefined') {
                        const old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.convertXMLToJson(item));
                }
            }
        }
        return Object.keys(obj).length === 0 ? '' : obj;
    }
}
