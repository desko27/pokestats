import {Injectable} from 'angular2/core';

@Injectable()
export class NanobarService {
    
    private bar: any = null;
    private progress: number = 0;
    private last_tictac_counter: number = 0;
    private finished: boolean = true;

    constructor() { this.bar = new Nanobar({ id: 'nanobar' }); }

    
    public go(percent: number) { this.bar.go(percent); }

    public start() {

        this.finished = false;
        this.progress = 0;
        this.last_tictac_counter = 0;
        increase(this);

        function increase(self: NanobarService) {

            if (!self.finished) {

                var speed_rate = 1.75;
                var max_value = 80;
                var x = self.progress;

                var absolute_max = 97;
                var last_tictac_counter_max = 15;
                var last_tictac_power = 0.65;

                if (self.progress <= max_value)
                    self.progress += speed_rate * (max_value - x) / max_value;
                
                if (self.progress > max_value - 10) {

                    if (self.last_tictac_counter < last_tictac_counter_max)
                        self.last_tictac_counter++;
                    else {
                        self.progress += last_tictac_power;
                        self.last_tictac_counter = 0;
                    }

                }

                self.go(Math.min(self.progress, absolute_max));
                setTimeout(increase, 25, self);
            }

        }

    }

    public finish() {

        this.finished = true;
        this.go(100);
    }
}