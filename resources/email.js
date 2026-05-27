const user = "contact";
const domain = "mezanno.xyz";
const email = `${user}@${domain}`;

document.getElementById("email").innerHTML = `<a href="mailto:${email}">${email}</a>`;
