
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    
    const github = document.getElementById('profile.github')
github.href = profileData.social.github

const linkedin = document.getElementById('profile.linkedin')
linkedin.href = profileData.social.linkedin
}

function updateAbout(profileData) {
    const about = document.getElementById('profile.about')
    about.innerText = profileData.about
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education')

    education.innerHTML = profileData.education.map(item => {
        return `
            <li>
                <h3 class="title">${item.course}</h3>
                <p>${item.institution}</p>
                <p class="period">${item.status}</p>
            </li>
        `
    }).join('')
}
function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => {
        const technologies = project.technologies
            .map(technology => `<span class="technology">${technology}</span>`)
            .join('')

        const githubButton = project.url
            ? `
                <a class="project-button"
                   href="${project.url}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ${project.frontend ? 'Backend' : 'GitHub'}
                </a>
            `
            : ''

        const frontendButton = project.frontend
            ? `
                <a class="project-button"
                   href="${project.frontend}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Frontend
                </a>
            `
            : ''

        const demoButton = project.demo
            ? `
                <a class="project-button demo"
                   href="${project.demo}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Ver projeto
                </a>
            `
            : ''

        return `
            <li class="project-card">

                <h3 class="project-title ${project.github ? 'github' : ''}">
                    ${project.name}
                </h3>

                <p class="project-description">
                    ${project.description}
                </p>

                <div class="project-technologies">
                    ${technologies}
                </div>

                <div class="project-links">
                    ${githubButton}
                    ${frontendButton}
                    ${demoButton}
                </div>

            </li>
        `
    }).join('')
}

function updateCertifications(profileData) {
    const certifications = document.getElementById('profile.certifications')

    certifications.innerHTML = profileData.certifications.map(certification => {
        return `
            <li>
                <h3 class="title">${certification.name}</h3>

                <p class="period">
                    ${certification.institution}
                </p>

                <p>
                    ${certification.description}
                </p>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()

    updateProfileInfo(profileData)
    updateAbout(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateEducation(profileData)
    updateCertifications(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()
