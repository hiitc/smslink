// Code goes here

let ifrm = document.getElementById('iframeid');
console.log(ifrm);

ifrm.onload = function () {
  let doc = ifrm.contentWindow.document;
  console.log(doc);
}