using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TastyBites.Recipes
{
    public interface IRecipeAppService : ICrudAppService<
             RecipeDto,
             int,
             PagedAndSortedResultRequestDto>
    {
        Task<List<RecipeDto>> GetRecentAsync(int count = 3);
    }
}
