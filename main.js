const LinksSocialMedia = {
  github: 'lurkser',
  youtube: '',
  facebook: 'lucas.demelopaiva',
  instagram: 'lucaswithshades',
  twitter: ''
}

function changeSocialMediaLink() {
  //trocando o conteudo de uma id de html
  //userName.textContent = 'Marcelo'
  //percorre os li dentro do ul
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //arrow function são funções sem nome, só argumentos
  //essa ta recebendo o json e guardando ele rapidamente
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userGithub.textContent = data.login
    })
}

getGitHubProfileInfos()
//test
