/*
function func1() {
    const titleBox = document.querySelector("#titleBox");
    titleBox.style.display = "block";
    const dateBox = document.querySelector("#dateBox");
    dateBox.style.display = "block";
    const writerBox = document.querySelector("#writerBox");
    writerBox.style.display = "block";
}
  */ 

const title = document.querySelector("#title");
title.onclick = function(){
    const titleBox = document.querySelector("#titleBox");
    titleBox.style.display = "block";
    const dateBox = document.querySelector("#dateBox");
    dateBox.style.display = "none";
    const writerBox = document.querySelector("#writerBox");
    writerBox.style.display = "none";
}

const date = document.querySelector("#date");
date.onclick = function(){
    const dateBox = document.querySelector("#dateBox");
    dateBox.style.display = "block";
    const titleBox = document.querySelector("#titleBox");
    titleBox.style.display = "none";
    const writerBox = document.querySelector("#writerBox");
    writerBox.style.display = "none";
}

const writer = document.querySelector("#writer");
writer.onclick = function(){
    const writerBox = document.querySelector("#writerBox");
    writerBox.style.display = "block";
    const titleBox = document.querySelector("#titleBox");
    titleBox.style.display = "none";
    const dateBox = document.querySelector("#dateBox");
    dateBox.style.display = "none";
}