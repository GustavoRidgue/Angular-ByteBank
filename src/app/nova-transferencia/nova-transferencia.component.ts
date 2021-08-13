import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
    @Output() aoTransferir = new EventEmitter();

    valor: number = 0.00;
    destino: string = '0000-0';

    transferir() {
        console.log('Solicitado transferencia');

        const valorEmitir = {
            valor: this.valor,
            destino: this.destino
        };

        this.aoTransferir.emit(valorEmitir);

        // console.log(this.valor);
        // console.log(this.destino);
    }
}