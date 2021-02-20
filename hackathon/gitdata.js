
//importing octokit to work with github api

import {Octokit} from "http://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit();


//hitting github user search api

async function userdata(username){

	const user_response = await octokit.request(`GET /users/${username}`);
	//console.log(user_response.data);
	const data = user_response.data;
	console.log(data);
	build_profile(data);

}

//hitting github repo search api if username is given

async function user_repo_data(username){

	const repo_response = await octokit.request(`GET /users/${username}/repos`);
	console.log(repo_response.data);
}


//hitting github api for file content of a repository

async function search_repo_content(username,reponame){

	const content_response = await octokit.request(`GET /repos/${username}/${reponame}/contents/`);
	console.log(content_response.data);
}


//build profile-data

function build_profile(data){
	let profile_container = document.querySelector(".profile-content")
	profile_container.innerHTML = "";
	let avatar = document.createElement('div');
	avatar.setAttribute("class","profile_image");
	let avatar_image = document.createElement("img");
	avatar_image.setAttribute("class", "avatar");
	avatar_image.setAttribute("src",data.avatar_url);
	let name = document.createElement("div");
	name.setAttribute("class", "namediv");
	let nameheading = document.createElement("h2");
	let namespan = document.createElement("span");
	namespan.setAttribute("class", "namespan");
	namespan.innerHTML = data.name;
	let usernamespan = document.createElement("span");
	usernamespan.setAttribute("class", "usernamespan");
	usernamespan.innerHTML = data.login;
	let editarea = document.createElement("div");
	editarea.setAttribute("class", "editarea");
	let editbutton = document.createElement("button");
	editbutton.setAttribute("class","editbutton")
	editbutton.innerHTML = "Edit profile";
	let followerdiv = document.createElement("div");
	followerdiv.setAttribute("class", "followerdiv");
	let followericon = document.createElement("i");
	followericon.setAttribute("class", "fas fa-users");
	let followerlink = document.createElement("a");
	followerlink.setAttribute("class", "followerlink");
	followerlink.innerHTML = data.followers;
	let following_link = document.createElement("a");
	following_link.setAttribute("class", "following_link");
	following_link.innerHTML = "." + data.following + "  following" ;
	nameheading.append(namespan);
	name.append(nameheading,usernamespan);
	avatar.append(avatar_image);
	followerdiv.append(followericon,followerlink,following_link);
	editarea.append(editbutton,followerdiv);
	profile_container.append(avatar,name,editarea);

}


//getting query string

let searchquery = document.querySelector("#searchbox");
searchquery.addEventListener('keyup', (event) => {

	let query = searchquery.value;
	const keyName = event.key;
	if(keyName === "Enter"){
		userdata(query);
	}

});
