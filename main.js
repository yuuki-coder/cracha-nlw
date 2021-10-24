function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    //response é o argumento da arrow function.
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
  //data é o response que foi convertido para o JSON.
}

const LinksSocialMedia = {
  github: 'yuuki-coder',
  youtube: 'EidiYuki',
  facebook: 'Eidi Yuki',
  instagram: 'Eidi.Yuki',
  twitter: 'Eidi_Yuki'
}
changeSocialMediaLinks()
getGitHubProfileInfos()
