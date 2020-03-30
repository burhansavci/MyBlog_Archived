﻿using Microsoft.EntityFrameworkCore;
using MyBlog.Core.DataAccess.EntityFrameworkCore;
using MyBlog.DataAccess.Abstract;
using MyBlog.Entities.Concrete;

namespace MyBlog.DataAccess.Concrete.EntityFrameworkCore.Repositories
{
    public class EfCoreArticleRepository : EfCoreRepositoryBase<Article, MyBlogDbContext>, IArticleRepository
    {
        public EfCoreArticleRepository(DbContext dbContext) : base(dbContext)
        {
        }
    }
}