import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  cardImage = "https://s3-alpha-sig.figma.com/img/aaf3/dde1/cf7e78e1942c6b641feddd07977bac12?Expires=1698019200&Signature=J0PTDW23hZ5LLdTLFJX7eUYfnfkOHUP3Ot-Ef9mf0jBmXnhsnMo2OvFjLK5CHpwdkc4-joUNGL~dp6EoHEpG4wU71NF4ML8DIHJXxnm4kk2vOHJkyuiOgo5x9IFeD3dI04mE0oT34IhHP8oBHgEIFv6KxjGervBx2HfvDOToqDjX6OEeoG09uvrH2hzlIpMWOZipH7g7hjk9wJFRpMPuT6cm9VPYAWwfbYpQin4J8UjjHg-nR9hT1wnK0KfJlQ1gAk-FgbkCXiYhO81IV2um98Jjoi4W~ejq7W7RGOKFTgh3ilhsWlEg6GQlonboOayZzwKr0orbbauLmxsny2mawQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  cardName = "Pizza Pepperoni"
  cookingTime = "1h"
}
