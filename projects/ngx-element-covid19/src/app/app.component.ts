import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {ApiService} from "./api.service";
import {FormControl} from "@angular/forms";
import {switchMap} from "rxjs/operators";
import {Country} from "./interfaces/country";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, AfterViewInit {
    public FormControlCountries: FormControl = new FormControl();
    // @ts-ignore
    private countryStatsDiv: Element | null;
    public countries$: Observable<Country[]>=  new Observable<Country[]>();
    constructor(
        private renderer: Renderer2,
        private apiService: ApiService
    ) {
    }

    ngOnInit(): void {

        this.FormControlCountries.valueChanges
            .pipe(

                switchMap((data:any) => {
                    console.log(data)
                    return this.apiService.getStatistics(data)
                }),

            )
            .subscribe(
                (stats) => {
                    console.log(stats)
                    this.displayStatistics(stats);
                },
                (err) => {
                    console.log(err)
                }
            )

       // @ts-ignore
        this.countries$ =  this.apiService.getCountries()

    }

    ngAfterViewInit(): void {
        // @ts-ignore
        this.countryStatsDiv = document.querySelector("ngx-element-covid19").shadowRoot.querySelector('.country-stats');


        this.apiService.getStatistics("monde").subscribe(stats => {
            this.displayStatistics(stats);
        });


    }

    displayStatistics(stats:any) {
        const lastUpdate = new Date(stats.lastUpdate);
        const niceDate = this.getLastDataUpdateDate(lastUpdate);

        const countryStats = `
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Confirmés : ${stats.confirmed.value}</h5>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Guéris : ${stats.recovered.value}</h5>
                </div>
                </div>
            </div>
             <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Décédés : ${stats.deaths.value}</h5>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 mt-4">Données mises à jour le ${niceDate}</div>
        </div>
    `;
        this.renderer.setProperty(this.countryStatsDiv , 'innerHTML', countryStats )
    }


    getLastDataUpdateDate(lastUpdate:any) {
        return `${this.makeToDigits(lastUpdate.getDate())}/${this.makeToDigits(
            lastUpdate.getMonth() + 1
        )}/${this.makeToDigits(lastUpdate.getFullYear())} à ${this.makeToDigits(
            lastUpdate.getHours()
        )}H${this.makeToDigits(lastUpdate.getMinutes())}min`;
    }

    makeToDigits(value:number) {
        return value > 9 ? value : "0" + value.toString();
    }
}
