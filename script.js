// 기술 목록
const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];

// 프로젝트 목록
const projects = [
    { name: '프로젝트 1', description: '프로젝트 1에 대한 설명' },
    { name: '프로젝트 2', description: '프로젝트 2에 대한 설명' },
    { name: '프로젝트 3', description: '프로젝트 3에 대한 설명' }
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