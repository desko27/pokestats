import {Injectable} from 'angular2/core';

@Injectable()
export class NanobarService {
    
    private bar: any = null;
    private progress: number = 0;
    private finished: boolean = true;

    constructor() { this.bar = new Nanobar({ id: 'nanobar' }); }

    
    public go(percent: number) { this.bar.go(percent); }

    public start() {

        this.finished = false;
        this.progress = 0;
        increase(this);

        function increase(self: NanobarService) {

            if (!self.finished) {

                var speed_rate = 2;
                var max_value = 95;
                var x = self.progress;

                self.progress += speed_rate * (max_value - x) / max_value;
                self.go(self.progress);

                setTimeout(increase, 25, self);
            }

        }

    }

    public finish() {

        this.finished = true;
        this.go(100);
    }
}