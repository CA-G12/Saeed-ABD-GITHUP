const resultContainer = document.querySelector('.result-container');

const card = (obj) => {

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const userimage = document.createElement('img');
    cardDiv.appendChild(userimage);
    const ancorUser = document.createElement('a');
    cardDiv.appendChild(ancorUser);
    const usaerName = document.createElement('h1')
    ancorUser.appendChild(usaerName);
    const span = document.createElement('span');
    cardDiv.appendChild(span);
    resultContainer.appendChild(cardDiv);
    userimage.src = '/public/images/logo.jpeg';
    ancorUser.href = '#';
    usaerName.textContent = ' Saeed Madi ';
    span.textContent = 'tranee';

}
card()   

const repos = (obj) => {

    const reposDiv = document.createElement('div');
    reposDiv.classList.add('repos')
    const repoHome = document.createElement('div');
    repoHome.classList.add('repo-card')
    const repoAncor = document.createElement('a');
    const textAncor = document.createElement('h3');
    const repoSpan = document.createElement('span');
    resultContainer.appendChild(reposDiv)
    console.log(resultContainer);
    reposDiv.appendChild(repoHome)
    repoHome.appendChild(repoAncor)
    repoAncor.appendChild(textAncor)
    console.log(repoAncor);
    repoHome.appendChild(repoSpan)
    repoAncor.href = '#'
    textAncor.textContent = 'Repo Name';
    repoSpan.textContent = 'HTML';
}
repos()

