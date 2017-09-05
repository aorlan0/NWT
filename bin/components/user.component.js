"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
var UserComponent = (function () {
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.profiles =
            {
                id: 1,
                name: 'Cassious Clay',
                status: 'Float like a butterfly sting like a bea',
                backimg: 'images/topimg.jpg',
                profimg: 'images/profile.jpg',
                tposts: [
                    {
                        id: 1,
                        image: 'images/post1.jpg',
                        body: 'I hated every minute of training, but I said, Dont quit. Suffer now and live the rest of your life as a champion.',
                        comments: ['comment 1', 'com ent 23'],
                        showComments: false,
                        likes: 1,
                        hasClicked: false
                    },
                    {
                        id: 2,
                        image: 'images/post2.jpg',
                        body: 'Its just a job. Grass grows, birds fly, waves pound the sand. I beat people up.',
                        comments: ['tinki winki', 'lala po'],
                        showComments: false,
                        likes: 0,
                        hasClicked: false
                    }
                ]
            };
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
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    UserComponent.prototype.toggleStatuschange = function () {
        if (this.showStatuschange == true) {
            this.showStatuschange = false;
        }
        else {
            this.showStatuschange = true;
        }
    };
    UserComponent.prototype.toggleComments = function (i) {
        if (this.profiles.tposts[i].showComments == true) {
            this.profiles.tposts[i].showComments = false;
        }
        else {
            this.profiles.tposts[i].showComments = true;
        }
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent.prototype.addPost = function (img, comm) {
        console.log(img);
        console.log("com", comm);
        var post;
        if (img == "") {
            img = "images/No_image.png";
        }
        post = {
            id: 5,
            image: img,
            body: comm,
            comments: [],
            likes: 0,
            hasClicked: false
        };
        if (comm != "") {
            this.profiles.tposts.splice(0, 0, post);
        }
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    };
    UserComponent.prototype.changeProfile = function (topimg, profimg, stat) {
        console.log(topimg);
        console.log(profimg);
        if (topimg != "") {
            this.profiles.backimg = topimg;
        }
        if (profimg != "") {
            this.profiles.profimg = profimg;
        }
        if (stat != "") {
            this.profiles.status = stat;
        }
        document.getElementById("inputtop").value = "";
        document.getElementById("inputproimg").value = "";
        document.getElementById("inputstat").value = "";
    };
    UserComponent.prototype.addComment = function (comm, i) {
        console.log(comm);
        if (comm != "")
            this.profiles.tposts[i].comments.splice(0, 0, comm);
        document.getElementById("inputcom").value = "";
    };
    UserComponent.prototype.likePost = function (i) {
        if (this.profiles.tposts[i].hasClicked == true) {
            this.profiles.tposts[i].hasClicked = false;
            this.profiles.tposts[i].likes--;
        }
        else {
            this.profiles.tposts[i].hasClicked = true;
            this.profiles.tposts[i].likes++;
        }
    };
    UserComponent.prototype.deletePost = function (i) {
        this.profiles.tposts.splice(i, 1);
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html',
            providers: [posts_service_1.PostsService]
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map