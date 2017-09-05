import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html', 
  providers: [PostsService]
})
export class UserComponent { 
  name: string;
  status: string;
  address: address;
  hobbies: string[];
  showStatuschange: boolean;
 
  posts:  Post[];
  //tposts:  Post[];
  profiles: Profile;

  constructor(private postsService: PostsService){
    this.profiles=
        {
            id: 1,
            name: 'Cassious Clay',
            status: 'Float like a butterfly sting like a bea',
            backimg: 'images/topimg.jpg',
            profimg: 'images/profile.jpg',
            tposts: 
            [
                {
                    id: 1,
                    image: 'images/post1.jpg',
                    body:'I hated every minute of training, but I said, Dont quit. Suffer now and live the rest of your life as a champion.',
                    comments: ['comment 1', 'com ent 23'],
                    showComments: false,
                    likes: 1,
                    hasClicked: false
                },
                {
                    id: 2,
                    image: 'images/post2.jpg',
                    body:'Its just a job. Grass grows, birds fly, waves pound the sand. I beat people up.',
                    comments: ['tinki winki', 'lala po'],
                    showComments: false,
                    likes: 0,
                    hasClicked: false
                }     
            ] 
        }
    
    /*this.tposts = 
        [
            {
                id: 1,
                image: 'http://www.henryjameskorn.com/wp-content/uploads/2016/06/muhammad-ali-in-action.jpg',
                body:'I hated every minute of training, but I said, Dont quit. Suffer now and live the rest of your life as a champion.'
            },
            {
                id: 2,
                image: 'http://www.frazerconsultants.com/wp-content/uploads/2016/06/muhammedali.jpg',
                body:'Its just a job. Grass grows, birds fly, waves pound the sand. I beat people up.'
            }
        ]         
        */

    this.showStatuschange = false;
    
    
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });

    }

    toggleStatuschange(){
        if(this.showStatuschange == true){
            this.showStatuschange = false;
        }
        else{
            this.showStatuschange = true;
        }
    }

    toggleComments(i){
        if( this.profiles.tposts[i].showComments == true){
            this.profiles.tposts[i].showComments = false;
        }
        else{
            this.profiles.tposts[i].showComments = true;
        }
    }

    addHobby(hobby){
            this.hobbies.push(hobby);
    }

    deleteHobby(i){
        this.hobbies.splice(i, 1);
    } 

    addPost(img, comm){
            console.log(img);
            console.log("com",comm);
            const post;
            if(img == ""){
                    img = "images/No_image.png"
            }
            post = {
                id:5,
                image: img,
                body: comm,
                comments: [],
                likes: 0,
                hasClicked: false
            }
            if(comm != ""){
                this.profiles.tposts.splice(0,0,post);
            }
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
    }

    changeProfile(topimg, profimg, stat){
            console.log(topimg);
            console.log(profimg);
            if(topimg != ""){    
                this.profiles.backimg = topimg;
            }

            if(profimg != ""){ 
                this.profiles.profimg = profimg;
            }
            if(stat != ""){ 
                this.profiles.status = stat;
            }


            document.getElementById("inputtop").value = "";
            document.getElementById("inputproimg").value = "";
            document.getElementById("inputstat").value = "";
    }

    addComment(comm, i){
            console.log(comm);
            if(comm!="")
                this.profiles.tposts[i].comments.splice(0,0,comm);

            document.getElementById("inputcom").value = "";
    }

    likePost(i){
        if(this.profiles.tposts[i].hasClicked==true){
            this.profiles.tposts[i].hasClicked = false;
            this.profiles.tposts[i].likes--;
        }
        else{
            this.profiles.tposts[i].hasClicked = true;
            this.profiles.tposts[i].likes++;
        }
    }
    private deletePost(i){
         this.profiles.tposts.splice(i,1);
    }
 }

 interface address{
     street: string;
     city: string;
     state:string;
 }

  interface Post{
     id: number;
     image: string;
     body:string;
     comments: string[];
     showComments: boolean;
     likes: number;
     hasClicked: boolean;
 }
    
  interface Profile{
     id: number;
     name: string;
     status: string;
     backimg: string;
     profimg: string;
     tposts: Post[];
 }