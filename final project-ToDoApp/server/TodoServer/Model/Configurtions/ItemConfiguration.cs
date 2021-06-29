using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Model;

namespace TodoServer.Configurations
{
    public class ItemConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.ToTable("Items");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Caption)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.ListId)
                .IsRequired();

            builder.Property(x => x.IsCompleted)
                .IsRequired();
        }
    }
}
