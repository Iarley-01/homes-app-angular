import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  //readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url: string = 'https://homes-app-rest-api.vercel.app/locations';
  constructor() { }
  async getAllHousingLocations() : Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      //console.log(data);
      return data ?? [];
    } catch (error) {
      console.error('Error fetching houses locations:', error);
      return [];
    }
    /*const data = await fetch(this.url);
    return await data.json() ?? [];*/
}
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
        console.error(`House location with id ${id} not found`);
      } else {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return undefined;
      }
      
      const data = await response.json();
      
      
      /*const foundLocation = data.locations.find((location: HousingLocation) => location.id === id);
      
      if (foundLocation) {
        return foundLocation;
      } else {
        console.error(`Invalid data received for house location with id ${id}`);
        return undefined;
      }*/
      
      if(data && data.id !== undefined && data.name !== undefined){
        return data;
      } else {
        console.error(`Invalid data received for house location with id ${id}`);
        return undefined;
      }
    } catch (error) {
      console.error(`Error fetching selected house location with id ${id}`, error);
      return undefined;
    }
    /*const data = await fetch(`${this.url}/${id}`);
    console.log(data.json());
    return await data.json() ?? undefined;*/
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
