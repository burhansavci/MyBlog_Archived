﻿namespace MyBlog.Core.Entities.Concrete
{
    public class BaseUser : IEntity
    {
        public int Id { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }

    }
}
