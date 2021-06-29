using Microsoft.EntityFrameworkCore;
using Model;
//using TodoServer.Configurations;

namespace TodoServer.Data
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<List> Lists { get; set; }
        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


        modelBuilder.Entity<Item>()
            .HasOne<List>()
            .WithMany()
            .HasForeignKey(l => l.ListId);

            // Specific
            //modelBuilder.ApplyConfiguration<Item>(new ItemConfiguration());
            //modelBuilder.ApplyConfiguration<List>(new ListConfiguration());

            // Automatic Discovery off all Configurations in Assembly            
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(List).Assembly);
        }
    }
}
