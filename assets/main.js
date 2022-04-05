const hero = document.querySelector(`.hero`);
hero.style.backgroundImage = `url('./assets/sf.jpg')`;

const name = document.querySelector(`.hero h1 span`);
name.innerHTML = `Michael Schmalz`;

const greeting = document.querySelector(`.hero h3`);
greeting.innerHTML = `Greetings!`;

const photo = document.querySelector(`.profile-img`);
photo.src = `https://attachments.office.net/owa/schmalzm25%40altamontschool.org/service.svc/s/GetAttachmentThumbnail?id=AAMkAGRhYjZmYjE0LWM1MWQtNGI2NC1hYjAzLWYwNDBlMzdlZGZlMwBGAAAAAADm%2FQT5o453SKlOFqVsrnrDBwDjkVOw3TDdQLyt%2BXAXIyMLAAAAAAEMAADjkVOw3TDdQLyt%2BXAXIyMLAAJpJjHTAAABEgAQAFK5sHcUYoBBprNpIwgXmBY%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkZBRDY1NDI2MkM2QUYyOTYxQUExRThDQUI3OEZGMUIyNzBFNzA3RTkiLCJ0eXAiOiJKV1QiLCJ4NXQiOiItdFpVSml4cThwWWFvZWpLdDRfeHNuRG5CLWsifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiNmY4ZTRhY2IyOTBhNDA1MmE1MWU4NjkyZGVjMzZjOTEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3N2ZkZWMzYy0wMWRjLTQyZWItOTJjOS1hNTIzYjA4MjU1ZjkiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMTUzMTAwMDEyMDZcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJiOGYxNjg2ZS0wNmQ1LTRjMDktYjk0YS1mNzA5YjIxODJmNWVcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTQwMTAxNDgzNzItMTQ2MzU1NjgzMS0yMDgzMzc3NDk3LTE1NzQ2MjE2XCJ9IiwibmJmIjoxNjQ3NzkwMDU3LCJleHAiOjE2NDc3OTA2NTcsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA3N2ZkZWMzYy0wMWRjLTQyZWItOTJjOS1hNTIzYjA4MjU1ZjkiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudHMub2ZmaWNlLm5ldEA3N2ZkZWMzYy0wMWRjLTQyZWItOTJjOS1hNTIzYjA4MjU1ZjkiLCJoYXBwIjoib3dhIn0.pSMnLAN-4TMSvMC4awY7ydRmG2wCo0JMREedqjUdGdIf88zuz50F3N61hW3uQANreErmBQw5VgC1WPCGsQuxLhaUB9bs8NF9RDFhryNBfqfybj8cyc6jpc4_qs7886hBv0Q7Pb_XnOXnWTxHCMOpsB3ZKzAthr_v4bFYBHPwYbZI1MhPslhBUGu_Pwd3b-a_m8M7s1zoQ0XV7PaAQJBuEEjyryEa_Gyc99R89V4AIRwNW0lQQxk4fiB6lg-rNT23sKZkIqhl3wnm6fnFNSJn0LIVF3d0Eq555qDnDUYB6YaaXiqrGAm-uRnQtqvXZSwozM_Q2RnOXWl60dtW6Xx7UQ&X-OWA-CANARY=8zWLfWmLDkGIvgUQLzCuLXAzZy-GCtoYxR0s0MxPTc1vaR1IfxXmYesS7G0OdIiU3etQJc9PTMQ.&owa=outlook.office.com&scriptVer=20220311006.05&animation=true`;


const favorites = [{
    img: `./assets/soccer.jpeg`,
    title: `Soccer`,
    desc: `I love Soccer. I enjoy the constant motion of the sport and the individuality in players.`
  },
  {
    img: `./assets/gaming.jpg`,
    title: `Games`,
    desc: `Most weekends I will spend part of my day playing videogames. I enjoy playing with my friends and finding a common aspect between us.`
  },
  {
    img: `./assets/jabari.jpg`,
    title: `Basketball`,
    desc: `During Activites or X Period, I usually am playing basketball. I like the teamwork and individual skill that basketball can integrate.`
  }
]

const gallery = document.querySelector(`.info-gallery`);

favorites.map((favorite) => {
  let newEl = document.createElement(`div`);
  newEl.classList.add(`info-item`);
  newEl.innerHTML = `
  <img src="${favorite.img}" alt="${favorite.title}" class="item-img" />
  <h4>${favorite.title}</h4>
  <p>${favorite.desc}</p>
  `

  gallery.appendChild(newEl)
})
