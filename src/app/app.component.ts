import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchRecipeService } from './Services/search-recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Recipes } from './Model/recipes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent  implements OnInit {
  title = 'Food_Recipe_Finder';


  toSearchRecipe : string = '';
  recipes : Recipes[] = [];
  newRecipe : Recipes = {
    title :undefined,
    ingredients :undefined,
    instructions :undefined,
    servings :undefined
  };

  constructor(private searchServices: SearchRecipeService){}

  ngOnInit(): void {
  }
  
  fetchRecipes() { 
    this.searchServices.getRecipes(this.toSearchRecipe).subscribe((data: any) => {
      this.recipes = data;
    },
    (error) => {
      console.log('Error in Fetching recipe;',error);
    } );
  }

  fetchInstruction(clickedRecipe: Recipes) {
    const instructions = clickedRecipe.instructions;
    if (instructions) {
      alert('Instructions:\n' + instructions);
    } else {
      alert('Instructions not available for this recipe.');
    }
  }
  
  fetchIngredients(clickedRecipe: Recipes) {
    const ingredients = clickedRecipe.ingredients;
    if (ingredients) {
      alert('Ingredients\n' + ingredients);
    } else {
      alert('Ingredients not available for this recipe.');
    }
  }
}