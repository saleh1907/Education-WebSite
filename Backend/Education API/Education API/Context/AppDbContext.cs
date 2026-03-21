using Education_API.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Education_API.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(modelBuilder);
    }
    public DbSet<AppUser> AppUsers { get; set; }
}
