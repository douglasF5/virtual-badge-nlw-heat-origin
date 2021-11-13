
//SOCIAL MEDIA DATA
let socialMedia = [
    {
        name: "GitHub",
        userName: "douglasF5"
    },
    {
        name: "LinkedIn",
        userName: "douglasfs"
    },
    {
        name: "Instagram",
        userName: undefined
    },
    {
        name: "Facebook",
        userName: "douglasefes"
    },
    {
        name: "Twitter",
        userName: "DouglasFS11"
    }
];

//SETTING THE PAGE WITH DATA FROM THE USER'S GITHUB PROFILE
const userDataUrl = `https://api.github.com/users/${socialMedia[0].userName}`;

fetch(userDataUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('profile-pic').src = data.avatar_url;
        document.getElementById('profile-name').innerText = data.name;
        document.getElementById('github-user-name').innerText = data.login;
        document.getElementById('github-user-name-wrapper').href = data.html_url;
        document.getElementById('profile-description').innerText = data.bio;
    })

//CHECKING AND SETTING SOCIAL MEDIA LINKS
const socialMediaLinksRow = document.getElementById('social-media-links-row').querySelectorAll('li');

for (let i = 0; i < socialMediaLinksRow.length; i++) {

    let link = socialMediaLinksRow[i];

    if(socialMedia[i+1].userName !== undefined) {
        link.querySelector('a').href = assembleLink(socialMedia[i+1].name, socialMedia[i+1].userName);
    } else {
        link.remove();
    }
}

function assembleLink(siteName, userName) {
    const linkedinExtra = siteName === "LinkedIn" ? "in/" : "";
    const assembledLink = `https://${siteName.toLowerCase()}.com/${linkedinExtra}${userName}`;
    return assembledLink;
}