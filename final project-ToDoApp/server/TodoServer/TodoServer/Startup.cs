using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Data;
using TodoServer.Services;

namespace TodoServer
{
    public class Startup
    {
        private const string ConnectionStringName = "TodoApp";
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //for cors problem
            services.AddCors(option => option.AddPolicy("AlloaAccess_To_Api",
                Policy => Policy
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                ));



            services.AddDbContext<TodoDbContext>(options =>
            {
                string connectionString = _configuration.GetConnectionString(ConnectionStringName);
                options.UseSqlServer(connectionString);
            });

            services.AddControllers();
            services.AddScoped<IItemsRepository, ItemsRepository>();
            services.AddScoped<IListsRepository, ListsRepository>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TodoServer", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //for cors problem
            app.UseCors("AlloaAccess_To_Api");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TodoServer v1"));
            }

            

            app.UseRouting();

            //app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
