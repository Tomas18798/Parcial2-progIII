import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { catchError, distinct, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Persona } from "../Interfaces/Persona";

@Injectable({
    providedIn: 'root'
})
export class PersonaProvider {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Persona[]> {
        const url = environment.url + 'Person';
        return this.http.get<Persona[]>(url).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.log("algo paso, error: " + error.message)
        }
        else {
            console.log("Status code: " + error.status);
            console.log(error);
        }
        return throwError(() => new Error(error.error))
    }

    create(
        nombre?: string,
        apellido?: string,
        dni?: string,
        direccion?:string): Observable<Persona> {
        const url = environment.url + "Person"; 
        const request = {
            "nombre": nombre,
            "apellido": apellido,
            "dni": dni,
            "direccion" : direccion
        }
        const header = { 'content-type': 'application/json' };
        return this.http.post<Persona>(url, request, { headers: header }).pipe(catchError(this.handleError));
    }

}
