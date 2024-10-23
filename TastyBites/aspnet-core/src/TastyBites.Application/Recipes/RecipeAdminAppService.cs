using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TastyBites.Recipes
{
    public class RecipeAdminAppService : CrudAppService<Recipe, RecipeDto, int, PagedAndSortedResultRequestDto>, IRecipeAppService
    {
        private readonly IRepository<Recipe, int> _recipesRepository;

        public RecipeAdminAppService(
            IRepository<Recipe, int> recipesRepository
            )
        : base(recipesRepository)
        {
            _recipesRepository = recipesRepository;
        }





    }
}
