using Education_API.Context;
using Education_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Education_API.Seeder;

public static class DbInitializer
{
    public static async Task SeedAdminAsync(AppDbContext context)
    {
        await context.Database.MigrateAsync();

        var adminExists = await context.AppUsers.AnyAsync(x => x.Role == "Admin");

        if (!adminExists)
        {
            var admin = new AppUser
            {
                FullName = "System Admin",
                Email = "admin@gmail.com",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin123!"),
                Role = "Admin"
            };

            await context.AppUsers.AddAsync(admin);
            await context.SaveChangesAsync();
        }
    }
}
