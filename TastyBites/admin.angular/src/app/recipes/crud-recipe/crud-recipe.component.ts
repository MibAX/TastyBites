import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeAdminService } from '@proxy/recipes';

@Component({
  selector: 'app-crud-recipe',
  templateUrl: './crud-recipe.component.html',
  styleUrls: ['./crud-recipe.component.scss']
})
export class CrudRecipeComponent implements OnInit {
  recipeFormGroup: FormGroup;
  recipeId: number | null = null;
  isEditMode = false;

  constructor(
    private recipeAdminSvc: RecipeAdminService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    console.log('CrudRecipeComponent > ngOnInit');
    this.buildFrom();

    // Check if a recipe ID is provided in the activatedRoute
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');

      if (!idParam) {
        return; // No recipe ID in route; exit early.
      }

      // Convert the id from a string to a number
      this.recipeId = Number(idParam);

      this.isEditMode = true;

      // Load the recipe for editing
      this.loadRecipe(this.recipeId);
    });

  }

  private buildFrom() {
    this.recipeFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    });
  }

  private loadRecipe(id: number): void {
    this.recipeAdminSvc.get(id).subscribe(recipe => {
      // Prepopulate the form with the retrieved recipe data
      this.recipeFormGroup.patchValue({
        name: recipe.name,
        description: recipe.description
      });
    });
  }

  cancel(): void {
    this.router.navigate(["/recipes/list"]);
  }

  createRecipe(): void {
    if (this.recipeFormGroup.invalid) {
      alert("some fields are invalid");
      return;
    }

    this.recipeAdminSvc.create(this.recipeFormGroup.value).subscribe((response) => {
      console.log('Recipe created successfully', response);
      this.router.navigate(["/recipes/list"]);
    });
  }

  saveRecipe(): void {
    if (this.recipeFormGroup.invalid) {
      alert("Some fields are not valid.");
      return;
    }

    if (this.isEditMode && this.recipeId !== null) {
      // Update existing recipe
      this.recipeAdminSvc.update(this.recipeId, this.recipeFormGroup.value).subscribe(response => {
        console.log('Recipe updated successfully', response);
        this.router.navigate(["/recipes/list"]);
      });

      this.recipeAdminSvc.update(this.recipeId, this.recipeFormGroup.value).subscribe(
        res => {
          console.log('HTTP response', res);
          this.router.navigate(['/recipes']);
        },
        err => {
          console.log('HTTP Error', err);
        },
        () => {
          console.log('HTTP request completed.');
        }
      );



    } else {
      // Create new recipe
      this.recipeAdminSvc.create(this.recipeFormGroup.value).subscribe(response => {
        console.log('Recipe created successfully', response);
        this.router.navigate(["/recipes/list"]);
      });
    }
  }


}
