function skillsMember() {
    let skill = document.querySelector(".skill");
    let skillMember = document.querySelector(".skill-member");
    let skillMemberClose = document.querySelector(".skill-member-close");
    skill.addEventListener("click", function () {
        skillMember.classList.add("active");
    });
    skillMemberClose.addEventListener("click", function () {
        skillMember.classList.remove("active");
    });
}