import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class userInput {

    userDetails = [
        {name : 'Ravi', height: '176', weight: '72', age: '20', gender: 'Male', activityl: "moderate"},
        {name : 'Kiran', height: '179', weight: '79', age: '24', gender: 'Male', activityl: "moderate"},
        
      ]

    takeinput(name, height, weight, age, gender, activityl) {
        this.userDetails.push({name, height, weight, age, gender, activityl})
    }
}