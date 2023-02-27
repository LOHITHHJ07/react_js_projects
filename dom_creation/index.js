const apps = [
  { name: "Netflix", path: "images/n2.png" },
  { name: "Amazon Prime", path: "images/prime.png" },
  { name: "Hotstar", path: "images/hotstar.jpeg" },
];
const appName = document.getElementById("apps");
const alen = apps.length;

for (let i = 0; i < alen; i++) {
  let image = document.createElement("img");
  image.src = apps[i].path;
  image.height = 20;
  image.width = 20;
  image.style.borderRadius = "5px";
  const t = document.createTextNode(" " + apps[i].name);
  const li = document.createElement("li");
  li.appendChild(image);
  li.appendChild(t);
  appName.appendChild(li);
}
