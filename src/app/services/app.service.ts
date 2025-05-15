import { Inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppService {
    private selectedUserId = 'u1';

    constructor() {
        const selectedUserId = localStorage.getItem('selectedUserId');

        if (selectedUserId) {
            this.selectedUserId = JSON.parse(selectedUserId);
        }
    }

    public saveSelectedUserId(userId: string) {
        this.selectedUserId = userId;
        localStorage.setItem('selectedUserId', JSON.stringify(this.selectedUserId));
    }

    get getSelectedUserId(): string {
        return this.selectedUserId;
    }
}