// 기술 목록
const skills = ["python,C 말곤 아무것도 못함 "];

// 프로젝트 목록
const projects = [
    { name: '물리 1', description: '한바퀴만 돌림' },
    { name: '화학 1', description: '1단원 개빡쎔' },
    { name: '생명과학 1', description: "유전 잘 못함" }
];

// 기술 목록 표시
function displaySkills() {
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// 프로젝트 목록 표시
function displayProjects() {
    const projectsList = document.getElementById('projectsList');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsList.appendChild(div);
    });
}

// 페이지 로드 시 함수 실행
window.onload = function() {
    displaySkills();
    displayProjects();
};