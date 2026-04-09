using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Education_API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRegister : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Password",
                table: "AppUsers",
                newName: "UserName");

            migrationBuilder.AddColumn<string>(
                name: "EducationLevel",
                table: "AppUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "AppUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EducationLevel",
                table: "AppUsers");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "AppUsers");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "AppUsers",
                newName: "Password");
        }
    }
}
